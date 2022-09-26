import { Args, ID, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { ObjectId } from "mongoose";
import { User } from "src/user/models/user.model";
import { UserService } from "src/user/user.service";
import { Space } from "./models/space.model";
import { SpaceService } from "./space.service";

@Resolver(of => Space)
export class SpaceResolver {
  constructor(
    private spaceService: SpaceService,
    private userService: UserService
  ) { }

  @Query(returns => Space, { name: 'space' })
  async getSpace(@Args('id', { type: () => ID }) id: ObjectId) {
    return ( await this.spaceService.find(id));
  }

  @ResolveField('owner', returns => User)
  async getUser(@Parent() space: Space) {
    return await this.userService.find(space.id);
  }
}