import { Field, ID, ObjectType } from "@nestjs/graphql"
import { ObjectId } from "mongoose";

@ObjectType()
export class User {
  @Field(type => ID )
  id: ObjectId

  @Field({ nullable: true })
  firstName: string

  @Field({ nullable: true })
  lastName: string

  @Field({ nullable: true })
  username: string

  @Field({ nullable: true })
  email: string
}
