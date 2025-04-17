import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { RoomModule } from './room/room.module';
import { PrescriptionModule } from './prescription/prescription.module';
import { AppointmentModule } from './appointment/appointment.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/appointment-db'),
    AppointmentModule,
    DoctorModule,
    PatientModule,
    PrescriptionModule,
    RoomModule,
  ],
})
export class AppModule {}
