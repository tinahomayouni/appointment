import { Injectable } from '@nestjs/common';
import { Patient } from './patient.schema';
import { CreatePatientDto } from './dto/create.patient.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient.name) private readonly patient: Model<Patient>,
  ) {}
  async create(createPatientDto: CreatePatientDto) {
    const patient = new this.patient({
      name: createPatientDto.name || '',
      phone: createPatientDto.phone || '',
      email: createPatientDto.email || '',
      gender: createPatientDto.gender || '',
      dateOfBirth: createPatientDto.dateOfBirth || '',
    });
    const savedPatient = await patient.save();
    return savedPatient;
  }
}
