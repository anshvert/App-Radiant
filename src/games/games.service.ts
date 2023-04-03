import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game,GamesDocument } from './schemas/games.schema';

@Injectable()
export class GamesService {

    constructor(@InjectModel(Game.name) private readonly gamesModel:Model<GamesDocument>){}

    async getGames(){
        const allGames = this.gamesModel.find({})
        return allGames
    }
}
