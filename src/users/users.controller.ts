import { Controller, Get, Post, Put, Req, Delete, Res, Body,UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './users.service'
import { UserDTO } from './dto/users.dto';

@Controller('users')
export class UserController{
    constructor(private readonly userservice: UserService) {}

    @Get()
    async getUsers(@Res() res){

        const response = await this.userservice.getUsers()
        res.status(200).send({result:response})
    }
    @Post('login')
    async userLogin(@Req() req, @Res() res){

        const response = await this.userservice.loginUser(req.body)
        res.status(200).send(response)
    }
    @Post('add')
    @UsePipes(new ValidationPipe({ forbidNonWhitelisted:true }))
    async addUser(@Req() req, @Res() res, @Body() body:UserDTO){

        const response = await this.userservice.adduser(body)
        res.status(200).send(response)
    }
    @Put('update')
    async updateUser(@Req() req, @Res() res, @Body() body:UserDTO){
        
        const response = await this.userservice.updateUser(req,body)
        res.status(200).send(response)
    }
    @Delete('delete')
    async deleteUser(@Req() req, @Res() res){

        const response = await this.userservice.deleteUser(req)
        res.status(200).send(response)

    }
}
