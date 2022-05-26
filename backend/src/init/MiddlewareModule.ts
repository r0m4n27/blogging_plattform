import { AuthMiddleware } from "@/middleware/AuthMiddleware";
import { CommonMiddleware } from "@/middleware/CommonMiddleware";
import { EnvironmentModule } from "./EnvironmentModule";
import { ServiceModule } from "./ServiceModule";

export class MiddlewareModule {
  readonly commonMiddleware: CommonMiddleware;
  readonly authMiddleware: AuthMiddleware;

  constructor(services: ServiceModule, environment: EnvironmentModule) {
    this.commonMiddleware = new CommonMiddleware();

    this.authMiddleware = new AuthMiddleware(
      services.databaseService,
      environment.jwtSecret,
    );
  }
}
