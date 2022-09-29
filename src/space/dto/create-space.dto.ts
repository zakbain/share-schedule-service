import { ObjectId } from "mongoose";

export class CreateSpaceDto {
  readonly owner: ObjectId;
  readonly title: string;
  readonly description: string;
}
