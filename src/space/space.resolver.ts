import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { ObjectId } from "mongoose";
import { AvailabilityService } from "src/schedule/availability/availability.service";
import { Availability } from "src/schedule/models/availability.model";
import { User } from "src/user/models/user.model";
import { UserService } from "src/user/user.service";
import { CreateSpaceInput } from "./dto/create-space.input";
import { Space } from "./models/space.model";
import { SpaceService } from "./space.service";

@Resolver(of => Space)
export class SpaceResolver {
  constructor(
    private spaceService: SpaceService,
    private userService: UserService,
    private availabilityService: AvailabilityService,
  ) { }

  @Query(returns => Space, { name: 'space' })
  async getSpace(@Args('id', { type: () => ID }) id: ObjectId) {
    return (await this.spaceService.find(id));
  }

  @ResolveField('owner', returns => User)
  async getUser(@Parent() space: Space) {
    return await this.userService.find(space.id);
  }

  @ResolveField('availabilities', returns => [Availability])
  async getAvailabilities(@Parent() space: Space) {
    return await this.availabilityService.findBySpace(space.id);
  }

  @Mutation(returns => Space)
  async createSpace(@Args('createSpaceData') createSpaceData: CreateSpaceInput) {
    return await this.spaceService.create(createSpaceData);
  }
}