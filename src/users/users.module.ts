import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User,UserSchema } from './schemas/users.schema'
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

@Module({

    imports: [MongooseModule.forFeature([{name:User.name,schema:UserSchema}])],
    controllers: [UserController],
    providers: [UserService,
            {
            provide: APP_PIPE,
            useClass: ValidationPipe,
          },]
})
export class UsersModule {}

