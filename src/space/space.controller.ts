import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSpaceDto } from './dto/create-space.dto';
import { Space } from './schemas/space.schema';
import { SpaceService } from './space.service';

@Controller('spaces')
export class SpaceController {
  constructor(private readonly spaceService: SpaceService) { }

  @Post()
  async create(@Body() createUserDto: CreateSpaceDto): Promise<Space> {
    return this.spaceService.create(createUserDto)
  }

  @Get()
  async getAll(): Promise<Space[]> {
    return this.spaceService.findAll()
  }
}
