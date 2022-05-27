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
} from "@/model/authorArticleModels";
import { ArticleService } from "@/service/ArticleService";
import { Request } from "express";

export class AuthorArticleController {
  private readonly articleNotFoundText = "Article not found!";

  constructor(private readonly articles: ArticleService) {}

  readAll = async (req: Request, res: ResponseWithError<ArticleResponse[]>) => {
    const requestWithUser = req as RequestWithUser<unknown>;

    // Excluding only one item from the selection doesn't work so 'articleResponseFromDb' is used
    const articles = await this.articles.readAllByUser(
      requestWithUser.injected.user,
    );

    res.json(articles.map(articleResponseFromDb));
  };

  readSingle = async (
    req: Request,
    res: ResponseWithError<ArticleResponse>,
  ) => {
    const article = await this.articles.readSingle(req.params["id"]);

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
    const article = await this.articles.create(
      req.body,
      requestWithUser.injected.user,
    );

    res.json(articleResponseFromDb(article));
  };

  update = async (
    req: RequestWithBody<Partial<ArticleModel>>,
    res: ResponseWithError<ArticleResponse>,
  ) => {
    const updatedArticle = await this.articles.update(
      req.params["id"],
      req.body,
    );

    res.json(articleResponseFromDb(updatedArticle));
  };

  delete = async (
    req: Request,
    res: ResponseWithError<Record<string, never>>,
  ) => {
    await this.articles.delete(req.params["id"]);

    res.json({});
  };
}
