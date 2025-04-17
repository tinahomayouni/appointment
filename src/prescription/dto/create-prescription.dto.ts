// src/prescription/dto/create-prescription.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';

export class CreatePrescriptionDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  doctor: Types.ObjectId;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  patient: Types.ObjectId;

  @ApiProperty()
  @IsNotEmpty()
  medications: string[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  dosage: string;
}
