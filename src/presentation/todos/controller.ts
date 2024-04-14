//no es un metodo estatico debido a que queremo hacer
//inyecciones

import { Request, Response } from "express";

const todos = [
  { id: 1, text: "buy milk", createAt: new Date() },
  { id: 2, text: "buy beat", createAt: new Date() },
  { id: 3, text: "buy cookies", createAt: new Date() },
];

export class TodosController {
  constructor() {}

  public getTodos = (req: Request, res: Response) => {
    res.json(todos);
  };
  public getTodoById(req: Request, res: Response) {
    const id = +req.params.id;
    if(isNaN(id)) return res.status(400).json({error:"ID argument is no a number"})

    const findProduct=todos.find(product=>id===product.id)
    if(!findProduct) return res.status(404).json({error:`Todo with id ${id} no exit`})
    res.json(findProduct);
  }
}
