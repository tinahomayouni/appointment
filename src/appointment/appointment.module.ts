import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Appointment, AppointmentSchema } from './appointment.schema';
import { Doctor, DoctorSchema } from 'src/doctor/doctor.schema';
import { Room, RoomSchema } from 'src/room/room.schema';
import { Patient, PatientSchema } from 'src/patient/patient.schema';
import {
  Prescription,
  PrescriptionSchema,
} from 'src/prescription/prescription.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Appointment.name, schema: AppointmentSchema },
      { name: Doctor.name, schema: DoctorSchema },
      { name: Room.name, schema: RoomSchema },
      { name: Patient.name, schema: PatientSchema },
      { name: Prescription.name, schema: PrescriptionSchema },
    ]),
  ],
})
export class AppointmentModule {}
