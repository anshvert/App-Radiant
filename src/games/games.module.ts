import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { Game,GamesSchema } from './schemas/games.schema'

@Module({
    imports:[MongooseModule.forFeature([{name:Game.name,schema:GamesSchema}])],
    controllers:[GamesController],
    providers:[GamesService],
    exports:[]
})
export class GamesModule {}
