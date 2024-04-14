import { Router } from "express";
import { TodosController } from "./controller";



export class TodoRoutes {

    static get route():Router{
        const router=Router();
        const todosController= new TodosController
        router.get( '/',todosController.getTodos)//solo envuamos la referencia de la funcion 
        router.get( '/:id',todosController.getTodoById)//solo envuamos la referencia de la funcion 

        return router
    }
}