import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReservationDto } from '../dto/create-reservation.dto';
import { Reservation, ReservationDocument } from '../schemas/reservation.schema';

@Injectable()
export class ReservationService {
  constructor(@InjectModel(Reservation.name) private ReservationModel: Model<ReservationDocument>) {}

  async create(createReservationDto: CreateReservationDto): Promise<Reservation> {
    const createdReservation = new this.ReservationModel(createReservationDto);
    return createdReservation.save();
  }

  async findAll(): Promise<Reservation[]> {
    return await this.ReservationModel.find().exec();
  }
}
