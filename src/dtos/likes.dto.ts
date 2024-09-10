/* eslint-disable prettier/prettier */
import { IsNotEmpty} from 'class-validator';

export class CreateArticleDto {
  
  @IsNotEmpty()
  public status: boolean;

}

export class UpdateArticleDto {
    @IsNotEmpty()
    public status: boolean;
  }
