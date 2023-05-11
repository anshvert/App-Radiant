import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<Todo>

@Schema({collection:"todo"})
export class Todo {
  @Prop({required:true})
  title:string

  @Prop()
  description:string

  @Prop({required:true})
  email:string

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({required:true,default:false})
  completed:boolean
}

export const TodoSchema = SchemaFactory.createForClass(Todo)