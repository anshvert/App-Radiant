import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/mongodb_tut')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
