import { Args, Query, Resolver } from "@nestjs/graphql";
import { AvailabilityService } from "./availability.service";

@Resolver('Availability')
export class AvailabilityResolver {
  constructor(
    private availabilityService: AvailabilityService,
  ) {}

  @Query()
  async availability(@Args('id') id: number) {
    return this.availabilityService.findAll();
  }
}