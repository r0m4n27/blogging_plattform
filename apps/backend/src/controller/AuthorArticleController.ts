import { articleErrorMessages } from "@blog/backend/common/errorMessages";
import { HttpException, Req } from "@blog/backend/common/router/types";
import type { ReqWithUser } from "@blog/backend/model/authModels";
import {
  type ArticleModel,
  type ArticleResponse,
  articleResponseFromDb,
} from "@blog/backend/model/authorArticleModels";
import type { IdParamsModel } from "@blog/backend/model/commonModels";
import type { ArticleService } from "@blog/backend/service/ArticleService";

export class AuthorArticleController {
  constructor(private readonly articles: ArticleService) {}

  readAll = async (req: ReqWithUser): Promise<ArticleResponse[]> => {
    // Excluding only one item from the selection doesn't work so 'articleResponseFromDb' is used
    const articles = await this.articles.readAllByUser(req.extras.user);

    return articles.map(articleResponseFromDb);
  };

  readSingle = async (req: Req<unknown, IdParamsModel>): Promise<ArticleResponse> => {
    const article = await this.articles.readSingle(req.params["id"]);

    if (article !== null) {
      return articleResponseFromDb(article);
    } else {
      throw new HttpException(articleErrorMessages.articleNotFound, 404);
    }
  };

  create = async (req: ReqWithUser<ArticleModel>): Promise<ArticleResponse> => {
    const article = await this.articles.create(req.body, req.extras.user);

    return articleResponseFromDb(article);
  };

  update = async (
    req: Req<Partial<ArticleModel>, IdParamsModel>,
  ): Promise<ArticleResponse> => {
    const updatedArticle = await this.articles.update(req.params.id, req.body);

    return articleResponseFromDb(updatedArticle);
  };

  delete = async (req: Req<unknown, IdParamsModel>) => {
    await this.articles.delete(req.params.id);

    return {};
  };
}
