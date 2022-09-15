import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateAvailabilityDto } from '../dto/create-availability.dto';
import { Availability } from '../schemas/availability.schema';
import { AvailabilityService } from './availability.service';

@Controller('availabilities')
export class AvailabilityController {
  constructor(private readonly availabilityService: AvailabilityService) { }

  @Post()
  async create(@Body() createAvailabilityDto: CreateAvailabilityDto): Promise<Availability> {
    return this.availabilityService.create(createAvailabilityDto)
  }

  @Get()
  async getAll(): Promise<Availability[]> {
    return this.availabilityService.findAll()
  }
}
