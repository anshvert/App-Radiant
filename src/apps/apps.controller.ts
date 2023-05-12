import { Controller, Get, Post, Req, Res, Body } from '@nestjs/common';
import { AppsService } from "./apps.service";

@Controller('apps')
export class AppsController {
  constructor(private readonly appsService:AppsService) {}

  @Get()
  async getAllApps(@Res() res){
    const todoList = await this.appsService.getAllApps()
    return res.status(200).send(todoList)
  }
  @Post('add')
  async addApp(@Req() req,@Res() res,@Body() body){
    const response = await this.appsService.addApp(body)
    return res.status(200).send(response)
  }

}