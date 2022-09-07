import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';

export type ReservationDocument = Reservation & Document;

@Schema()
export class Reservation {
  @Prop({ type: mongoose.Types.ObjectId })
  spaceId: ObjectId;

  @Prop()
  startsAt: Date;

  @Prop()
  endsAt: Date;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);