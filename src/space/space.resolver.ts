import { Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { User } from "src/user/models/user.model";
import { UserService } from "src/user/user.service";
import { Space } from "./models/space.model";
import { SpaceService } from "./space.service";

@Resolver(of => Space)
export class SpaceResolver {
  constructor(
    private spaceService: SpaceService,
    private userService: UserService
  ) {}

  @Query(returns => Space, { name: 'space' })
  async getSpace() {
    const spaces = await this.spaceService.findAll();
    return spaces[0];
  }

  @ResolveField('owner', returns => User)
  async getUser(@Parent() owner: User) {
    const users = await this.userService.findAll();
    return users[0];
  }
}