import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';

export type AvailabilityDocument = Availability & Document;

@Schema()
export class Availability {
  @Prop({ type: mongoose.Types.ObjectId })
  spaceId: ObjectId;

  @Prop()
  startsAt: Date;

  @Prop()
  endsAt: Date;
}

export const AvailabilitySchema = SchemaFactory.createForClass(Availability);