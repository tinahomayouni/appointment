import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
import { Types } from 'mongoose';

export class CreateAppointmentDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  doctor: Types.ObjectId;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  patient: Types.ObjectId;

  @ApiProperty({ enum: ['TEXT', 'CALL'] })
  @IsEnum(['TEXT', 'CALL'])
  type: 'TEXT' | 'CALL';

  @ApiProperty({ required: false })
  @IsOptional()
  date?: Date;
}
