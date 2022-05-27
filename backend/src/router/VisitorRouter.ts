import { SiteRouter } from "@/common/siteRouter";
import { VisitorController } from "@/controller/VisitorController";
import { Router } from "express";

export class VisitorRouter implements SiteRouter {
  readonly path: string = "/";
  readonly router: Router;

  constructor(controller: VisitorController) {
    this.router = Router();

    this.router.get("/articles", controller.readArticles);
    this.router.get("/articles/:id", controller.readSingleArticle);

    this.router.get("/archive", controller.readArchive);
    this.router.get("/categories", controller.readCategories);
    this.router.get("/categories/:id", controller.readCategory);
  }
}
