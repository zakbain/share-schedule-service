import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateReservationDto } from '../dto/create-reservation.dto';
import { Reservation } from '../schemas/reservation.schema';
import { ReservationService } from './reservation.service';

@Controller('reservations')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) { }

  @Post()
  async create(@Body() createReservationDto: CreateReservationDto): Promise<Reservation> {
    return this.reservationService.create(createReservationDto)
  }

  @Get()
  async getAll(): Promise<Reservation[]> {
    return this.reservationService.findAll()
  }
}
