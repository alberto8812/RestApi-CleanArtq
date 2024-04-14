import { Router } from "express";
import { TodoRoutes } from "./todos/routes";


export class AppRoutes {

    static get route():Router{
        const router=Router();
        router.use( '/api/todos',TodoRoutes.route);
        
        return router
    }
}