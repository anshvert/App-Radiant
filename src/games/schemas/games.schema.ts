import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GamesDocument = HydratedDocument<Game>

@Schema({collection:'games'})
export class Game {
    @Prop()
    name:string

    @Prop()
    description:string

    @Prop()
    url:string
}
export const GamesSchema = SchemaFactory.createForClass(Game)
