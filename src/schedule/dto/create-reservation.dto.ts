import { ObjectId } from "mongoose";

export class CreateReservationDto {
  readonly spaceId: ObjectId;
  readonly startsAt: Date;
  readonly endsAt: Date;
}
