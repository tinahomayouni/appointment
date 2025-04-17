import { Injectable } from '@nestjs/common';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { Prescription } from './prescription.schema';

@Injectable()
export class PrescriptionService {
  create(createPrescriptionDto: CreatePrescriptionDto) {
    const prescription = new Prescription();
    prescription.doctor = createPrescriptionDto.doctor;
    prescription.patient = createPrescriptionDto.patient;
    prescription.medications = createPrescriptionDto.medications;
    prescription.dosage = createPrescriptionDto.dosage;
    prescription.date = new Date();
    return prescription;
  }
}
