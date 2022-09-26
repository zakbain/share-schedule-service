import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateSpaceDto } from './dto/create-space.dto';
import { Space, SpaceDocument } from './schemas/space.schema';

@Injectable()
export class SpaceService {
  constructor(@InjectModel(Space.name) private SpaceModel: Model<SpaceDocument>) { }

  async create(createUserDto: CreateSpaceDto): Promise<Space> {
    const createdUser = new this.SpaceModel(createUserDto);
    return createdUser.save();
  }

  async find(id: ObjectId): Promise<Space> {
    return this.SpaceModel.findOne({ _id: id }).exec();
  }
  
  async findAll(): Promise<Space[]> {
    return this.SpaceModel.find().exec();
  }
}
