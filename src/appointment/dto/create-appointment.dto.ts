import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
import { Types } from 'mongoose';
import { AppointmentType } from '../enum/appointment.enum';

export class CreateAppointmentDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  doctor: Types.ObjectId;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  patient: Types.ObjectId;

  @ApiProperty({ enum: AppointmentType })
  @IsEnum(AppointmentType)
  @IsNotEmpty()
  type: AppointmentType;

  @ApiProperty({ required: false })
  @IsOptional()
  date?: Date;
}
