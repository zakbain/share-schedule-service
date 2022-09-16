import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

export type SpaceDocument = Space & Document;

@Schema()
export class Space {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  owner: User;

  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const SpaceSchema = SchemaFactory.createForClass(Space);