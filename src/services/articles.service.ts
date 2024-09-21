/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';
import Container, { Service } from 'typedi';
import { CreateArticleDto } from '@dtos/articles.dto';
import { HttpException } from '@/exceptions/httpException';
import { Article } from '../interfaces/articles.interface';
import { localDate } from '../utils/localDate';
import { MediaService } from './medias.service';


@Service()
export class ArticleService {
  public article = new PrismaClient().article;
  public media = Container.get(MediaService);

  public async findAllArticle(): Promise<Article[]> {
    const allArticle: Article[] = await this.article.findMany({
      include: {
        media: true,
        user:true,
      },
    });
    return allArticle;
  }

  public async findArticleById(articleId: string): Promise<Article> {
    const findArticle: Article = await this.article.findUnique({
      where: { id: articleId },
      include: {
        media: true,
        user:true,
    }});
    if (!findArticle) throw new HttpException(409, "User doesn't exist");

    return findArticle;
  }

  public async createArticle(articleData:any,req:any): Promise<Article> {
   
    const created_at = localDate();
    const userId = req.auth.userId as string;

    const newArticle: Article = await this.article.create({
      data: {
        ...articleData,
        userId,
        created_at,
      }
    });

    await this.media.createMedia(req,newArticle.id)
   
    return newArticle;
  }

  public async updateUserPseudo(articleId: string, userData: CreateArticleDto): Promise<Article> {
    const findArticle: Article = await this.article.findUnique({ where: { id: articleId } });
    if (!findArticle) throw new HttpException(409, "User doesn't exist");

    const updateArticleData = await this.article.update({ where: { id: articleId }, data: { ...userData, } });
    return updateArticleData;
  }

  public async deleteUser(articleId: string): Promise<Article> {
    const findArticle: Article = await this.article.findUnique({ where: { id: articleId } });
    if (!findArticle) throw new HttpException(409, "User doesn't exist");

    const deleteArticleData = await this.article.delete({ where: { id: articleId } });
    return deleteArticleData;
  }
}
