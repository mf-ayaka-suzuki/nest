// create-user-dto.ts
import { Type } from 'class-transformer';
import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsInt()
  @Type(() => Number)
  @Min(1)
  @Max(100)
  readonly age: number;
}
