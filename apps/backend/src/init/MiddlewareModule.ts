import { AuthMiddleware } from "@blog/backend/middleware/AuthMiddleware";
import { CommonMiddleware } from "@blog/backend/middleware/CommonMiddleware";
import type { ServiceModule } from "./ServiceModule";

export class MiddlewareModule {
  readonly commonMiddleware: CommonMiddleware;
  readonly authMiddleware: AuthMiddleware;

  constructor(services: ServiceModule) {
    this.commonMiddleware = new CommonMiddleware();

    this.authMiddleware = new AuthMiddleware(services.authService);
  }
}
