import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AppDocument = HydratedDocument<App>

@Schema({collection:"apps"})
export class App {

  @Prop()
  type:string

  @Prop({required:true})
  name:string

  @Prop()
  description:string

  @Prop()
  url:string

  @Prop()
  image:string

}

export const AppSchema = SchemaFactory.createForClass(App)