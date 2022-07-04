import {
  articleErrorMessages,
  categoryErrorMessages,
} from "@blog/backend/common/errorMessages";
import { HttpException, Req } from "@blog/backend/common/router/types";
import type { IdParamsModel } from "@blog/backend/model/commonModels";
import {
  type ArticleWithCategories,
  type ReadArticlesQueryModel,
  type VisitorArchiveResponse,
  visitorArticleFromDb,
  type VisitorArticleResponse,
  visitorCategoryFromDb,
  type VisitorCategoryResponse,
} from "@blog/backend/model/visitorModels";
import type { ArticleService } from "@blog/backend/service/ArticleService";
import type { CategoryService } from "@blog/backend/service/CategoryService";

export class VisitorController {
  constructor(
    private readonly articles: ArticleService,
    private readonly categories: CategoryService,
  ) {}

  readArticles = async (
    req: Req<unknown, unknown, ReadArticlesQueryModel>,
  ): Promise<VisitorArticleResponse[]> => {
    let articles: ArticleWithCategories[];

    const category = req.query["category"];
    const year = req.query["year"];
    if (category !== undefined) {
      articles = await this.articles.readAllByCategoryAsVisitor(category as string);
    } else if (year !== undefined) {
      articles = await this.articles.readAllByYearAsVisitor(year);
    } else {
      articles = await this.articles.readAllAsVisitor();
    }

    return articles.map(visitorArticleFromDb);
  };

  readSingleArticle = async (
    req: Req<unknown, IdParamsModel>,
  ): Promise<VisitorArticleResponse> => {
    const article = await this.articles.readSingleAsVisitor(req.params.id);

    if (article !== null) {
      return visitorArticleFromDb(article);
    } else {
      throw new HttpException(articleErrorMessages.articleNotFound, 404);
    }
  };

  readArchive = async (): Promise<VisitorArchiveResponse[]> => {
    const years = await this.articles.readCountedByYearAsVisitor();

    return years.map((year) => ({
      year: year.year,
      articleCount: year._count,
    }));
  };

  readCategories = async (): Promise<VisitorCategoryResponse[]> => {
    const categories = await this.categories.readAllWithArticleCount();

    return categories.map(visitorCategoryFromDb);
  };

  readCategory = async (
    req: Req<unknown, IdParamsModel>,
  ): Promise<VisitorCategoryResponse> => {
    const category = await this.categories.readSingleWithArticleCount(req.params.id);

    if (category !== null) {
      return visitorCategoryFromDb(category);
    } else {
      throw new HttpException(categoryErrorMessages.categoryNotFound, 404);
    }
  };
}
