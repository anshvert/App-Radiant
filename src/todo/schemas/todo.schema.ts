import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<Todo>

@Schema({collection:"todo"})
export class Todo {
  @Prop()
  title:string

  @Prop()
  description:string

  @Prop()
  email:string

  @Prop()
  createdtAt:Date

  @Prop()
  completed:boolean
}

export const TodoSchema = SchemaFactory.createForClass(Todo)