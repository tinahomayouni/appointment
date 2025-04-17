import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room } from './room.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RoomService {
  constructor(@InjectModel(Room.name) private readonly room: Model<Room>) {}
  async create(createRoomDto: CreateRoomDto) {
    const room = new this.room({
      roomName: createRoomDto.name || '',
      participants: createRoomDto.participants || [],
      isActive: createRoomDto.isActive || false,
      startedAt: createRoomDto.startedAt || new Date(),
      endedAt: createRoomDto.endedAt || new Date(),
    });
  }
}
