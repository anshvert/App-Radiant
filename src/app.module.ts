import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GamesModule } from './games/games.module';
import { TodoModule} from "./todo/todo.module";
import { AppsModule } from "./apps/apps.module";

@Module({
  imports: [UsersModule,MongooseModule.forRoot('mongodb+srv://ansh:Ansh2222@radiant.vfzdf6u.mongodb.net/RadiantDB?retryWrites=true&w=majority'),
    GamesModule,TodoModule,AppsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
