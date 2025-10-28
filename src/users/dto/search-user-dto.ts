import { Type } from 'class-transformer';
import { IsString, IsInt, Min, Max, IsOptional } from 'class-validator';

export class SearchUserDto {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  readonly age: number;
}