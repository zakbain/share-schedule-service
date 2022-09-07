import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Availability, AvailabilitySchema } from './schemas/availability.schema';
import { AvailabilityController } from './availability/availability.controller';
import { AvailabilityService } from './availability/availability.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Availability.name, schema: AvailabilitySchema }])],
  controllers: [AvailabilityController],
  providers: [AvailabilityService],
})
export class ScheduleModule { }