// src/patient/patient.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
export type PatientDocument = Patient & Document;
export const PatientSchema = SchemaFactory.createForClass(Patient);
