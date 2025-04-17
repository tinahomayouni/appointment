import { Injectable } from '@nestjs/common';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { Prescription } from './prescription.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PrescriptionService {
  constructor(
    @InjectModel(Prescription.name)
    private readonly prescription: Model<Prescription>,
  ) {}
  async create(createPrescriptionDto: CreatePrescriptionDto) {
    const prescription = new this.prescription({
      doctor: createPrescriptionDto.doctor,
      patient: createPrescriptionDto.patient,
      medications: createPrescriptionDto.medications,
      dosage: createPrescriptionDto.dosage,
      date: new Date(),
    });

    return prescription;
  }
}
