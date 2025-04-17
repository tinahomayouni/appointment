// src/appointment/appointment.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
@Schema({ timestamps: true })
export class Appointment {
  @Prop({ type: Types.ObjectId, ref: 'Doctor', required: true })
  doctor: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Patient', required: true })
  patient: Types.ObjectId;

  @Prop({ enum: ['TEXT', 'CALL'], required: true })
  type: 'TEXT' | 'CALL';

  @Prop()
  date: Date;

  @Prop({ type: Types.ObjectId, ref: 'Room' })
  room?: Types.ObjectId;

  @Prop({ enum: ['PENDING', 'CONFIRMED', 'CANCELLED'], default: 'PENDING' })
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
}
export type AppointmentDocument = Appointment & Document;
export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
