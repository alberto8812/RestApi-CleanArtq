import { TodoEntity } from "../entities/todo.entity";
import { CreateTodoDto } from '../dtos/todo/create-todo.dto';
import { UpdateTodoDto } from "../dtos";

export abstract class TodoRepository {
    abstract create(createTodoDto:CreateTodoDto):Promise<TodoEntity>;
    //todo paginacion
    abstract getAll():Promise<TodoEntity[]>;
    
    abstract finById(id:number):Promise<TodoEntity>;
    abstract updateById(updateTodoDto:UpdateTodoDto):Promise<TodoEntity>;
    abstract deleteById(id:number):Promise<TodoEntity>;
}