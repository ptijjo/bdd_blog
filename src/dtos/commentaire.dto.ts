/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, MinLength, MaxLength} from 'class-validator';

export class CreateArticleDto {
  
    @IsString()
    @IsNotEmpty()
    @MinLength(9)
    @MaxLength(1000)
    public message: string;

}

export class UpdateArticleDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(9)
    @MaxLength(1000)
    public message: string;
  }
