import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { Doctor } from './doctor.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DoctorService {
  constructor(
    @InjectModel(Doctor.name) private readonly doctor: Model<Doctor>,
  ) {}

  async create(createDoctorDto: CreateDoctorDto) {
    const doctor = new this.doctor({
      name: createDoctorDto.name || '',
      specialization: createDoctorDto.specialization || '',
      phone: createDoctorDto.phone || '',
      email: createDoctorDto.email || '',
    });

    const savedDoctor = await doctor.save();
    return savedDoctor;
  }
}
