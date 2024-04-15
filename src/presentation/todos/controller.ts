//no es un metodo estatico debido a que queremo hacer
//inyecciones

import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dtos";
import { TodoEntity, TodoRepository } from "../../domain";

export class TodosController {
  constructor(private readonly todoRepository: TodoRepository) {
    this.getTodoById = this.getTodoById.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.DeleteTodo = this.DeleteTodo.bind(this);
  }

  public getTodos = async (req: Request, res: Response) => {
    const todos = await this.todoRepository.getAll();

    return res.json(todos);
  };

  public async getTodoById(req: Request, res: Response) {
    const id = +req.params.id;
    if (isNaN(id))
      return res.status(400).json({ error: "ID argument is no a number" });
    try {
      const findProduct = await this.todoRepository.findById(id);
      return res.json(findProduct);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  public async createTodo(req: Request, res: Response) {
    const [error, createTodoDto] = CreateTodoDto.create(req.body);
    if (error) return res.status(400).json({ error });

    try {
      const todo = await this.todoRepository.create(createTodoDto!);
      res.json(todo);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  public async updateTodo(req: Request, res: Response) {
    const id = +req.params.id;
    const [error, updateTodoDto] = UpdateTodoDto.update({ ...req.body, id });

    if (error) return res.status(200).json({ error });

   try {
    
     const todo = await this.todoRepository.updateById(updateTodoDto!)
     res.status(200).json(todo);
   } catch (error) {
    res.status(400).json({ error });
   }
  }

  public async DeleteTodo(req: Request, res: Response) {
    const id = +req.params.id;
    if (isNaN(id))
      return res.status(400).json({ error: "ID argument is no a number" });
    try {
      const deleteProduct = await this.todoRepository.deleteById(id);
      res.json(deleteProduct);
      
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
