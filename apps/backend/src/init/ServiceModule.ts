import type { PrismaClient } from "@prisma/client";
import { DatabaseService } from "@blog/backend/service/database";
import { AuthService } from "@blog/backend/service/AuthService";
import type { EnvironmentModule } from "./EnvironmentModule";
import { CategoryService } from "@blog/backend/service/CategoryService";
import { ArticleService } from "@blog/backend/service/ArticleService";

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
      environment.tokenExpiryIntervall,
    );

    this.categoryService = new CategoryService(this.databaseService);
    this.articleService = new ArticleService(
      this.databaseService,
      this.categoryService,
    );
  }
}
