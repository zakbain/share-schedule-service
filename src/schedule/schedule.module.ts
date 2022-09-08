import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Availability, AvailabilitySchema } from './schemas/availability.schema';
import { AvailabilityController } from './availability/availability.controller';
import { AvailabilityService } from './availability/availability.service';
import { ReservationController } from './reservation/reservation.controller';
import { ReservationService } from './reservation/reservation.service';
import { Reservation, ReservationSchema } from './schemas/reservation.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Availability.name, schema: AvailabilitySchema }]),
  MongooseModule.forFeature([{ name: Reservation.name, schema: ReservationSchema }])],
  controllers: [AvailabilityController, ReservationController],
  providers: [AvailabilityService, ReservationService],
})
export class ScheduleModule { }