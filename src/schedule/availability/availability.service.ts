import { Model, ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Availability, AvailabilityDocument } from '../schemas/availability.schema';
import { CreateAvailabilityDto } from '../dto/create-availability.dto';

@Injectable()
export class AvailabilityService {
  constructor(@InjectModel(Availability.name) private AvailabilityModel: Model<AvailabilityDocument>) { }

  async create(createAvailabilityDto: CreateAvailabilityDto): Promise<Availability> {
    const createdAvailability = new this.AvailabilityModel(createAvailabilityDto);
    return createdAvailability.save();
  }

  async findBySpace(spaceId: ObjectId) {
    return await this.AvailabilityModel.find({ space: spaceId }).exec();
  }

  async findAll(): Promise<Availability[]> {
    return await this.AvailabilityModel.find().exec();
  }
}
