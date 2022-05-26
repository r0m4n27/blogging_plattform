import {
  createErrorResponse,
  RequestWithBody,
  ResponseWithError,
} from "@/common/express";
import { RequestWithUser } from "@/model/authModels";
import {
  ArticleModel,
  ArticleResponse,
  articleResponseFromDb,
  CategoriesIdsModel,
} from "@/model/authorArticleModels";
import { DatabaseService } from "@/service/database";
import { Category } from "@prisma/client";
import { Request } from "express";

export class AuthorArticleController {
  private readonly articleNotFoundText = "Article not found!";

  constructor(private readonly database: DatabaseService) {}

  readAll = async (req: Request, res: ResponseWithError<ArticleResponse[]>) => {
    const requestWithUser = req as RequestWithUser<unknown>;
    const { id: authorId } = requestWithUser.injected.user;

    // Excluding only one item from the selection doesn't work so 'articleResponseFromDb' is used
    const articles = await this.database.article.findMany({
      where: { authorId },
    });

    res.json(articles.map(articleResponseFromDb));
  };

  readSingle = async (
    req: Request,
    res: ResponseWithError<ArticleResponse>,
  ) => {
    const id = req.params["id"];

    const article = await this.database.article.findUnique({ where: { id } });

    if (article !== null) {
      res.json(articleResponseFromDb(article));
    } else {
      createErrorResponse(res, this.articleNotFoundText, 404);
    }
  };

  create = async (
    req: RequestWithBody<ArticleModel>,
    res: ResponseWithError<ArticleResponse>,
  ) => {
    const requestWithUser = req as RequestWithUser<unknown>;
    const { id: authorId } = requestWithUser.injected.user;
    const { categories: categoriesIds, ...restBody } = req.body;

    const categories = await this.findCategories(categoriesIds);

    const article = await this.database.article.create({
      data: {
        ...restBody,
        authorId,
        categories: {
          connect: categories,
        },
      },
    });

    res.json(articleResponseFromDb(article));
  };

  update = async (
    req: RequestWithBody<Partial<ArticleModel>>,
    res: ResponseWithError<ArticleResponse>,
  ) => {
    const id = req.params["id"];

    const { categories: categoryIds, ...bodyRest } = req.body;

    const categories = await this.findCategories(categoryIds);

    const updatedArticle = await this.database.article.update({
      data: {
        ...bodyRest,
        categories: {
          connect: categories,
        },
      },
      where: {
        id,
      },
    });

    res.json(articleResponseFromDb(updatedArticle));
  };

  delete = async (
    req: Request,
    res: ResponseWithError<Record<string, never>>,
  ) => {
    const id = req.params["id"];

    await this.database.article.delete({
      where: { id },
    });

    res.json({});
  };

  private findCategories = async (
    categories?: CategoriesIdsModel,
  ): Promise<Category[]> => {
    if (categories === undefined) return [];

    const foundCategories = await this.database.category.findMany({
      where: {
        id: {
          in: categories.map((category) => category.id),
        },
      },
    });

    return foundCategories;
  };
}
