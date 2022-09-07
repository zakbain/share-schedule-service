import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';

export type AvailabilityDocument = Availability & Document;

@Schema()
export class Availability {
  @Prop({ type: mongoose.Types.ObjectId })
  spaceId: ObjectId;

  @Prop()
  startTime: Date;

  @Prop()
  endTime: Date;
}

export const AvailabilitySchema = SchemaFactory.createForClass(Availability);