//no es un metodo estatico debido a que queremo hacer
//inyecciones

import { Request, Response } from "express";

const todos = [
  { id: 1, text: "buy milk", createAt: new Date() },
  { id: 2, text: "buy beat", createAt: null },
  { id: 3, text: "buy cookies", createAt: new Date() },
];

export class TodosController {
  constructor() {}

  public getTodos = (req: Request, res: Response) => {
    res.json(todos);
  };
  public getTodoById(req: Request, res: Response) {
    const id = +req.params.id;
    if (isNaN(id))
      return res.status(400).json({ error: "ID argument is no a number" });

    const findProduct = todos.find((product) => id === product.id);
    if (!findProduct)
      return res.status(404).json({ error: `Todo with id ${id} no exit` });
    res.json(findProduct);
  }

  public createTodo(req: Request, res: Response) {
    const { text } = req.body;
    if (!text) res.status(400).json({ error: "text isrequiered" });

    const newTodo = {
      id: todos.length + 1,
      text,
      createAt: null,
    };

    todos.push(newTodo);

    res.json({ text });
  }

  public updateTodo(req: Request, res: Response) {
    const id = +req.params.id;

    if (isNaN(id))
      return res.status(400).json({ error: "ID argument is no a number" });
    const findProduct = todos.find((product) => id === product.id);
    if (!findProduct)
      return res.status(404).json({ error: `Tod with id ${id} not found` });

    const { text,createAt } = req.body;
    if (!text)
      return res.status(400).json({ error: "text property is requiered" });

    findProduct.text = text || findProduct.text;
    (createAt === null)
    ? findProduct.createAt=null
    :findProduct.createAt=new Date(createAt || findProduct.createAt);

    res.status(200).json(findProduct);
  }
}
