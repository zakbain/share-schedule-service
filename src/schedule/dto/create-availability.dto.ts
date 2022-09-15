import { ObjectId } from "mongoose";

export class CreateAvailabilityDto {
  readonly spaceId: ObjectId;
  readonly startsAt: Date;
  readonly endsAt: Date;
}
