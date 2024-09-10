/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty} from 'class-validator';

export class CreateArticleDto {
  
  @IsString()
  @IsNotEmpty()
  public url: string[];

}

export class UpdateArticleDto {
    @IsString()
    @IsNotEmpty()
    public url: string[];
  }
