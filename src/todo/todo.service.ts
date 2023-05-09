import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Todo, TodoDocument } from "./schemas/todo.schema";

@Injectable()
export class TodoService {

  constructor(@InjectModel(Todo.name) private readonly todoModel:Model<TodoDocument>) {}

  async getTodoList(){
    return this.todoModel.find({})
  }
  async getUserTodoList(email) {
    return this.todoModel.find({
      email:email
    }).sort({createdAt:-1})
  }
  async addtTodo(todoBody){
    const todo = new this.todoModel(todoBody)
    return await todo.save();
  }
  async deleteTodo(todoBody){
    return this.todoModel.deleteOne({
      email: todoBody.email,
      title: todoBody.title,
    }).exec();
  }
}