// src/appointment/appointment.gateway.ts
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { AppointmentService } from '../appointment.service';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';

@WebSocketGateway({ cors: true })
export class AppointmentGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly appointmentService: AppointmentService) {}

  @SubscribeMessage('startCall')
  async handleStartCall(@MessageBody() data: CreateAppointmentDto) {
    const appointment = await this.appointmentService.create(data);
    this.server.emit('callStarted', { appointment });
  }
}
