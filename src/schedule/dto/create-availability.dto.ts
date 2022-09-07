import { ObjectId } from "mongoose";

export class CreateAvailabilityDto {
  readonly spaceId: ObjectId;
  readonly startTime: Date;
  readonly endTime: Date;
}
