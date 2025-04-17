import { Injectable } from '@nestjs/common';
import { Patient } from './patient.schema';
import { CreatePatientDto } from './dto/create.patient.dto';

@Injectable()
export class PatientService {
  create(createPatientDto: CreatePatientDto) {
    const patient = new Patient();
    patient.name = createPatientDto.name || '';
    patient.phone = createPatientDto.phone || '';
    patient.email = createPatientDto.email || '';
    patient.gender = createPatientDto.gender || 'other';
    patient.dateOfBirth = createPatientDto.dateOfBirth || new Date();
    return patient;
  }
}
