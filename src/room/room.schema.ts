// src/room/room.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Room {
  @Prop({ required: true })
  roomName: string;

  @Prop()
  isActive: boolean;

  @Prop()
  startedAt?: Date;

  @Prop()
  endedAt?: Date;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
