import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CourseSaveDto {
  @ApiProperty({
    example: '1',
  })
  @IsNotEmpty()
  @IsNumber()
  order: number;

  @ApiProperty({
    example: 'https://image.jpg',
  })
  @IsNotEmpty()
  @IsString()
  image: string;

  @ApiProperty({
    example: 12000,
  })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({
    example: 10000,
  })
  @IsNotEmpty()
  @IsNumber()
  sale_price: number;

  @ApiProperty({
    example: 'short description course',
  })
  @IsNotEmpty()
  @IsString()
  short_desc: string;

  @ApiProperty({
    example: 'description detail course',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  status: number;

  @ApiProperty({
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  category_id: number;
}
