import { HttpException, Req } from "@/common/router/types";
import { ReqWithUser } from "@/model/authModels";
import {
  ArticleModel,
  ArticleResponse,
  articleResponseFromDb,
} from "@/model/authorArticleModels";
import { IdParamsModel } from "@/model/commonModels";
import { ArticleService } from "@/service/ArticleService";

export class AuthorArticleController {
  private readonly articleNotFoundText = "Article not found!";

  constructor(private readonly articles: ArticleService) {}

  readAll = async (req: ReqWithUser): Promise<ArticleResponse[]> => {
    // Excluding only one item from the selection doesn't work so 'articleResponseFromDb' is used
    const articles = await this.articles.readAllByUser(req.extras.user);

    return articles.map(articleResponseFromDb);
  };

  readSingle = async (
    req: Req<unknown, IdParamsModel>,
  ): Promise<ArticleResponse> => {
    const article = await this.articles.readSingle(req.params["id"]);

    if (article !== null) {
      return articleResponseFromDb(article);
    } else {
      throw new HttpException(this.articleNotFoundText, 404);
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
