import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/user/models/user.model";

@ObjectType()
export class Space {
  @Field(type => User)
  owner: User;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  description: string;
}
