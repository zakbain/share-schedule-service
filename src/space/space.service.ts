import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSpaceDto } from './dto/create-space.dto';
import { Space, SpaceDocument } from './schemas/space.schema';

@Injectable()
export class SpaceService {
  constructor(@InjectModel(Space.name) private SpaceModel: Model<SpaceDocument>) {}

  async create(createUserDto: CreateSpaceDto): Promise<Space> {
    const createdUser = new this.SpaceModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<Space[]> {
    return this.SpaceModel.find().exec();
  }
}
