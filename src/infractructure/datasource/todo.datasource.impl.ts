import { prisma } from "../../data/postgres";
import {
  CreateTodoDto,
  TodoDataSource,
  TodoEntity,
  UpdateTodoDto,
} from "../../domain";

//IMPLEMENTAN EL DATASOURCE DEL DOMIAN

export class TodoDataSourceImpl implements TodoDataSource {
  
 async  create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
  
    const todo=await prisma.todos.create({
        data:createTodoDto!
    });
    return TodoEntity.fromObject(todo)
  }

  async getAll(): Promise<TodoEntity[]> {
    const todos = await prisma.todos.findMany();
    return todos.map(TodoEntity.fromObject);
  }

  async findById( id: number ): Promise<TodoEntity> {
    const todo = await prisma.todos.findFirst({
      where: { id }
    });

    if ( !todo ) throw `Todo with id ${ id } not found`;
    return TodoEntity.fromObject(todo);
  }

  async updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
    await this.findById(updateTodoDto.id);
    const todo = await prisma.todos.update({
      where: { id: updateTodoDto.id },
      data: {
        ...updateTodoDto?.values,
      },
    });
    return TodoEntity.fromObject(todo)
  }
  async deleteById(id: number): Promise<TodoEntity> {
    await this.findById(id);
    const deleteProduct =await prisma.todos.delete({where:{id}});
    return TodoEntity.fromObject(deleteProduct)
  }
}
