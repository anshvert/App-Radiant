import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { App, AppDocument } from "./schemas/apps.schema";

@Injectable()
export class AppsService {

  constructor(@InjectModel(App.name) private readonly appModel:Model<AppDocument>) {}

  async getAllApps(){
    return this.appModel.find({})
  }
  async addApp(appBody){
    const app = new this.appModel(appBody)
    return await app.save()
  }
}