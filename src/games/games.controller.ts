import { Controller, Get, Post, Put, Req, Delete, Res, Body,UsePipes, ValidationPipe } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
    constructor(private readonly gamesService:GamesService){}

    @Get()
    async getGames(@Res() res){

        const response = await this.gamesService.getGames()
        res.status(200).send({result:response})
    }
}