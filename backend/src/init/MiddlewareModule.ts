import { AuthMiddleware } from "@/middleware/AuthMiddleware";
import { CommonMiddleware } from "@/middleware/CommonMiddleware";
import { ServiceModule } from "./ServiceModule";

export class MiddlewareModule {
  readonly commonMiddleware: CommonMiddleware;
  readonly authMiddleware: AuthMiddleware;

  constructor(services: ServiceModule) {
    this.commonMiddleware = new CommonMiddleware();

    this.authMiddleware = new AuthMiddleware(services.authService);
  }
}
