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
    })
  }
  async addtTodo(todoBody){
    const date = new Date()
    const todo = new this.todoModel({
      title:todoBody.title,
      description:todoBody.description,
      email:todoBody.email,
      createdAt:date,
      completed:todoBody.completed
    })
    return await todo.save();
  }
}