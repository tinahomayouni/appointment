import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { Doctor } from './doctor.schema';

@Injectable()
export class DoctorService {
  private doctors = [];

  create(createDoctorDto: CreateDoctorDto) {
    const doctor = new Doctor();
    doctor.name = createDoctorDto.name || '';
    doctor.specialization = createDoctorDto.specialization || '';
    doctor.phone = createDoctorDto.phone || '';
    doctor.email = createDoctorDto.email || '';
    return doctor;
  }
}
