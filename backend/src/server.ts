import { Express, Router } from "express";
import express from "express";
import morgan from "morgan";
import { SiteRouter } from "./common/siteRouter";

export interface ServerConfig {
  port: number;
}

// Simple wrapper for the express server
//
// Uses the json middleware from express
// And one for simple logging
//
// It also applied all Routes from the the SiteRouters
export class Server {
  private readonly app: Express;
  private readonly port: number;

  constructor(config: ServerConfig, ...routers: SiteRouter[]) {
    this.port = config.port;
    this.app = express();

    this.app.use(express.json());
    this.app.use(morgan("short"));

    routers.forEach((siteRouter) => {
      const router = Router();
      siteRouter.routes.forEach((route) => {
        route.apply(router);
      });
      this.app.use(siteRouter.path, router);
    });
  }

  start() {
    this.app.listen(this.port);
  }
}
