import { ObjectId } from "mongoose";

export class CreateReservationDto {
  readonly space: ObjectId;
  readonly startsAt: Date;
  readonly endsAt: Date;
}
