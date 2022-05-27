import { Express } from "express";
import express from "express";
import morgan from "morgan";
import { SiteRouter } from "./common/siteRouter";

export interface ServerConfig {
  port: number;
}

export class Server {
  private readonly app: Express;
  private readonly port: number;

  constructor(config: ServerConfig, ...routers: SiteRouter[]) {
    this.port = config.port;
    this.app = express();

    this.app.use(express.json());
    this.app.use(morgan("short"));

    routers.forEach((router) => {
      this.app.use(router.path, router.router);
    });
  }

  start() {
    this.app.listen(this.port);
  }
}
