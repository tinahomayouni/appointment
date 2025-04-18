import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'http';
import { AppointmentService } from '../appointment.service';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';
import { Socket } from 'socket.io';

@WebSocketGateway({ cors: true, namespace: '/' })
export class AppointmentGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly appointmentService: AppointmentService) {
    console.log('AppointmentGateway initialized');
  }

  @SubscribeMessage('startCall')
  async handleStartCall(@MessageBody() data: CreateAppointmentDto) {
    console.log('[startCall] Received payload:', data);
    const appointment = await this.appointmentService.create(data);
    console.log('[startCall] Created appointment:', appointment);
    this.server.emit('callStarted', { appointment });
    return appointment;
  }
  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }
}
