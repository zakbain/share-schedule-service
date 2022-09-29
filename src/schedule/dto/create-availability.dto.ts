import { ObjectId } from "mongoose";

export class CreateAvailabilityDto {
  readonly space: ObjectId;
  readonly startsAt: Date;
  readonly endsAt: Date;
}
