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

  // Key: A string uniquely identifying the call e.g., doctor+patient+date
  private readonly callCache = new Map<string, any>();

  constructor(private readonly appointmentService: AppointmentService) {
    console.log('AppointmentGateway initialized');
  }

  @SubscribeMessage('startCall')
  async handleStartCall(@MessageBody() data: CreateAppointmentDto) {
    const cacheKey = `${data.doctor}-${data.patient}-${new Date(data.date || new Date()).toISOString()}`;

    if (this.callCache.has(cacheKey)) {
      console.log('[startCall] Returning cached appointment for:', cacheKey);
      return this.callCache.get(cacheKey);
    }

    console.log('[startCall] Received payload:', data);
    const appointment = await this.appointmentService.create(data);
    this.callCache.set(cacheKey, appointment);
    console.log('[startCall] Created appointment:', appointment);
    this.server.emit('callStarted', { appointment });
    return appointment;
  }
  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }
}
