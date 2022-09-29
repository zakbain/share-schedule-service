import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';
import { Space } from 'src/space/schemas/space.schema';

export type ReservationDocument = Reservation & Document;

@Schema()
export class Reservation {
  @Prop({ type: mongoose.Types.ObjectId, ref: Space.name })
  space: Space;

  @Prop()
  startsAt: Date;

  @Prop()
  endsAt: Date;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);