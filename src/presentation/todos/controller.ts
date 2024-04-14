//no es un metodo estatico debido a que queremo hacer
//inyecciones

import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dtos";


export class TodosController {
  constructor() {}

  public getTodos = async(req: Request, res: Response) => {
    const todos= await prisma.todos.findMany()
    res.json(todos);
  };
  public async getTodoById(req: Request, res: Response) {
    const id = +req.params.id;
    if (isNaN(id))
      return res.status(400).json({ error: "ID argument is no a number" });

    const findProduct = await prisma.todos.findUnique({where:{id}})
    if (!findProduct)
      return res.status(404).json({ error: `Todo with id ${id} no exit` });
    res.json(findProduct);
  }

  public async createTodo (req: Request, res: Response) {
    const [error,createTodoDto]=  CreateTodoDto.create(req.body);
    if(error) return res.status(400).json({error})


    const todo=await prisma.todos.create({
        data:createTodoDto!
    });


    res.json({ todo });
  }

  public async updateTodo(req: Request, res: Response) {
    const id = +req.params.id;
    const [error,updateTodoDto]=UpdateTodoDto.update({...req.body,id});

    if(error)return res.status(200).json({error});


    const findProduct = await prisma.todos.findUnique({where:{id}})
    if (!findProduct)
      return res.status(404).json({ error: `Tod with id ${id} not found` });

 
    const todo= await prisma.todos.update(
    {
        where:{id},
        data:{
            ...updateTodoDto?.values
        }
    }
    )
    

    res.status(200).json(todo);
  }

  public async  DeleteTodo (req: Request, res: Response){
    const id = +req.params.id;
    if (isNaN(id))
      return res.status(400).json({ error: "ID argument is no a number" });

    const findProduct = await prisma.todos.findUnique({where:{id}})
    if (!findProduct)
      return res.status(404).json({ error: `Tod with id ${id} not found` });
    const deleteProduct =await prisma.todos.delete({where:{id}});
    res.json(deleteProduct)
  }
}
