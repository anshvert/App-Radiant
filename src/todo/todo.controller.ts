import { Controller, Get, Post, Put, Req, Delete, Res, Body,UsePipes, ValidationPipe } from '@nestjs/common';
import { TodoService } from "./todo.service";
import { TodoDTO } from "./dto/todo.dto";

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService:TodoService) {}

  @Get()
  async getTodoList(@Res() res){
    const todoList = await this.todoService.getTodoList()
    return res.status(200).send(todoList)
  }

  @Post('get')
  async getUserTodoList(@Req() req,@Res() res,@Body() body) {
    const todoList = await this.todoService.getUserTodoList(body.email)
    const titles = todoList.map(todo => todo.title);
    return res.status(200).send(titles)
  }
  @Post('add')
  async addTodo(@Req() req,@Res() res,@Body() body:TodoDTO){
    const response = await this.todoService.addtTodo(body)
    return res.status(200).send(response)
  }
  @Post('del')
  async delTodo(@Req() req,@Res() res,@Body() body){
    const response = await this.todoService.deleteTodo(body)
    return res.status(200).send(response)
  }
}