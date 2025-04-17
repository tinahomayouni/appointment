// src/patient/patient.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PatientDocument = Patient & Document;

@Schema({ timestamps: true })
export class Patient {
  @Prop({ required: true })
  name: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  gender: 'male' | 'female' | 'other';

  @Prop()
  dateOfBirth: Date;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
