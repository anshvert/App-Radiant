import {Module} from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { AppsService} from "./apps.service";
import { AppsController } from './apps.controller'
import { App,AppSchema} from "./schemas/apps.schema";

@Module({
  imports:[MongooseModule.forFeature([{name:App.name,schema:AppSchema}])],
  controllers:[AppsController],
  providers:[AppsService],
  exports:[]
})

export class AppsModule {}

