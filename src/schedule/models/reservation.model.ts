import { Field, ObjectType } from "@nestjs/graphql"
import { Space } from "src/space/models/space.model";

@ObjectType()
export class Reservation {
  @Field(type => Space)
  space: Space

  @Field({ nullable: true })
  startsAt: Date

  @Field({ nullable: true })
  endsAt: Date
}
