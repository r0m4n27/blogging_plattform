import { createErrorResponse, ResponseWithError } from "@/common/express";
import {
  ArticleWithCategories,
  VisitorArchiveResponse,
  visitorArticleFromDb,
  VisitorArticleResponse,
  visitorCategoriesFromDb,
  VisitorCategoryResponse,
} from "@/model/visitorModels";
import { ArticleService } from "@/service/ArticleService";
import { CategoryService } from "@/service/CategoryService";
import { Request } from "express";

export class VisitorController {
  private readonly articleNotFoundText = "Article not found!";

  constructor(
    private readonly articles: ArticleService,
    private readonly categories: CategoryService,
  ) {}

  readArticles = async (
    req: Request,
    res: ResponseWithError<VisitorArticleResponse[]>,
  ) => {
    let articles: ArticleWithCategories[];

    const category = req.query["category"];
    const year = req.query["year"];
    if (category !== undefined) {
      articles = await this.articles.readAllByCategoryAsVisitor(
        category as string,
      );
    } else if (year !== undefined) {
      articles = await this.articles.readAllByYearAsVisitor(
        parseInt(year as string),
      );
    } else {
      articles = await this.articles.readAllAsVisitor();
    }

    res.json(articles.map(visitorArticleFromDb));
  };

  readSingleArticle = async (
    req: Request,
    res: ResponseWithError<VisitorArticleResponse>,
  ) => {
    const article = await this.articles.readSingleAsVisitor(req.params["id"]);

    if (article !== null) {
      res.json(visitorArticleFromDb(article));
    } else {
      createErrorResponse(res, this.articleNotFoundText, 404);
    }
  };

  readArchive = async (
    _: Request,
    res: ResponseWithError<VisitorArchiveResponse[]>,
  ) => {
    const years = await this.articles.readCountedByYearAsVisitor();

    res.json(
      years.map((year) => ({
        year: year.year,
        articleCount: year._count,
      })),
    );
  };

  readCategories = async (
    _: Request,
    res: ResponseWithError<VisitorCategoryResponse[]>,
  ) => {
    const categories = await this.categories.readAllWithArticleCount();

    res.json(categories.map(visitorCategoriesFromDb));
  };
}
