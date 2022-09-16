import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';
import { Space } from 'src/space/schemas/space.schema';

export type AvailabilityDocument = Availability & Document;

@Schema()
export class Availability {
  @Prop({ type: mongoose.Types.ObjectId, ref: Space.name })
  space: Space;

  @Prop()
  startsAt: Date;

  @Prop()
  endsAt: Date;
}

export const AvailabilitySchema = SchemaFactory.createForClass(Availability);