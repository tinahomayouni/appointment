import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DoctorDocument = Doctor & Document;

@Schema({ timestamps: true })
export class Doctor {
  @Prop({ required: true })
  name: string;

  @Prop()
  specialization: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);
