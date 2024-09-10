/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, MinLength, MaxLength} from 'class-validator';

export class CreateArticleDto {
  
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(500)
  public title: string;

}

export class UpdateArticleDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(500)
    public title: string;
  }
