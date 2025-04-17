// src/appointment/appointment.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { AppointmentService } from './appointment.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('appointments')
@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  create(@Body() createDto: CreateAppointmentDto) {
    return this.appointmentService.create(createDto);
  }
}
