import { Router, Express } from "express";
import express from "express";
import morgan from "morgan";

export interface ServerConfig {
  port: number;
}

export interface RouterConfig {
  path: string;
  router: Router;
}

export class Server {
  private readonly app: Express;
  private readonly port: number;

  constructor(config: ServerConfig, ...routers: RouterConfig[]) {
    this.port = config.port;
    this.app = express();

    this.app.use(express.json());
    this.app.use(morgan("short"));

    routers.forEach((config) => {
      this.app.use(config.path, config.router);
    });
  }

  start() {
    this.app.listen(this.port);
  }
}
