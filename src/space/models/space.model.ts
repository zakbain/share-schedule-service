import { Field, ID, Int, ObjectType } from "@nestjs/graphql"
import mongoose, { ObjectId } from "mongoose";
import { User } from "src/user/models/user.model";

@ObjectType()
export class Space {
  @Field(type => ID )
  id: ObjectId

  @Field(type => User)
  owner: User

  @Field({ nullable: true })
  title: string

  @Field({ nullable: true })
  description: string
}
