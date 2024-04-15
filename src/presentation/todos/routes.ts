import { Router } from "express";
import { TodosController } from "./controller";
import { TodoDataSourceImpl } from "../../infractructure/datasource/todo.datasource.impl";
import { TodoRepositoryImpl } from "../../infractructure/repositories/todo.repository.impl";



export class TodoRoutes {

    static get route():Router{
        const router=Router();
        const datasource = new TodoDataSourceImpl();
        const todoRepository = new TodoRepositoryImpl( datasource );
        const todoController = new TodosController(todoRepository);
        router.get( '/',todoController.getTodos)//solo envuamos la referencia de la funcion 
        router.get( '/:id',todoController.getTodoById)//solo envuamos la referencia de la funcion 
        router.post( '/',todoController.createTodo)//solo envuamos la referencia de la funcion 
        router.put( '/:id',todoController.updateTodo)//solo envuamos la referencia de la funcion 
        router.delete( '/:id',todoController.DeleteTodo)//solo envuamos la referencia de la funcion 

        return router
    }
}