import { Field, ID, InputType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@InputType()
export class CreateSpaceInput {
  @Field(type => ID)
  owner: ObjectId;

  @Field({ nullable: false })
  readonly title: string;

  @Field({ nullable: false })
  readonly description: string;
}