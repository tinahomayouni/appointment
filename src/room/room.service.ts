import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room } from './room.schema';

@Injectable()
export class RoomService {
  create(createRoomDto: CreateRoomDto) {
    const room = new Room();
    room.roomName = createRoomDto.name || '';
    room.isActive = false;
    room.startedAt = new Date();
    room.endedAt = new Date();
    return room;
  }
}
