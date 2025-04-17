// src/appointment/appointment.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Appointment, AppointmentDocument } from './appointment.schema';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { Room, RoomDocument } from '../room/room.schema';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectModel(Appointment.name)
    private appointmentModel: Model<AppointmentDocument>,
    @InjectModel(Room.name) private roomModel: Model<RoomDocument>,
  ) {}

  async create(createDto: CreateAppointmentDto) {
    let room: RoomDocument | null = null;
    if (createDto.type === 0) {
      room = await this.roomModel.create({
        participants: [createDto.doctor, createDto.patient],
      });
    }
    if (createDto.type === 1) {
      room = await this.roomModel.create({
        participants: [createDto.doctor, createDto.patient],
      });
    }
    return this.appointmentModel.create({
      ...createDto,
      room: room?.roomName || undefined,
    });
  }
}
