import { PrismaClient } from "@prisma/client";
import { DatabaseService } from "@/service/database";
import { AuthService } from "@/service/AuthService";
import { EnvironmentModule } from "./EnvironmentModule";
import { CategoryService } from "@/service/CategoryService";
import { ArticleService } from "@/service/ArticleService";

export class ServiceModule {
  readonly databaseService: DatabaseService;
  readonly authService: AuthService;
  readonly categoryService: CategoryService;
  readonly articleService: ArticleService;

  constructor(client: PrismaClient, environment: EnvironmentModule) {
    this.databaseService = new DatabaseService(client);

    this.authService = new AuthService(
      this.databaseService,
      environment.jwtSecret,
      environment.adminRegisterCode,
    );

    this.categoryService = new CategoryService(this.databaseService);
    this.articleService = new ArticleService(
      this.databaseService,
      this.categoryService,
    );
  }
}
