/* eslint-disable prettier/prettier */
import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Article } from '@interfaces/articles.interface';
import { ArticleService } from '@services/articles.service';

export class ArticleController {
  public article = Container.get(ArticleService);

  public getArticles = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllArticlesData: Article[] = await this.article.findAllArticle();

      res.status(200).json({ data: findAllArticlesData, message: 'findAllArticles' });
    } catch (error) {
      next(error);
    }
  };

  public getArticleById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const articleId = String(req.params.id);
      const findOneArticleData: Article = await this.article.findArticleById(articleId);

      res.status(200).json({ data: findOneArticleData, message: 'findOneUArticle' });
    } catch (error) {
      next(error);
    }
  };

  public createArticle = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const articleData: Article = req.body;
      const createArticleData: Article = await this.article.createArticle(articleData,req);

      res.status(201).json({ data: createArticleData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };


  public deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = String(req.params.id);
      const deleteUserData: Article = await this.article.deleteUser(userId);

      res.status(200).json({ data: deleteUserData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
