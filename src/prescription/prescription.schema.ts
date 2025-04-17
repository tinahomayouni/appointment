// src/prescription/prescription.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Prescription {
  @Prop({ type: Types.ObjectId, ref: 'Doctor', required: true })
  doctor: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Patient', required: true })
  patient: Types.ObjectId;

  @Prop({ type: [String], required: true })
  medications: string[];

  @Prop()
  dosage: string;

  @Prop({ default: Date.now })
  date: Date;
}
export type PrescriptionDocument = Prescription & Document;
export const PrescriptionSchema = SchemaFactory.createForClass(Prescription);
