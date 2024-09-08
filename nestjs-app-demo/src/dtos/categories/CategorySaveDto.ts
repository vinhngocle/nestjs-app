import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CategorySaveDto {
  @ApiProperty({
    example: 'Development',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'python',
  })
  @IsNotEmpty()
  @IsString()
  sub_category: string;
}
