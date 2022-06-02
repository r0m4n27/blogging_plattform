import { Router } from "express";
import { ConfiguredRoute } from "./router";

export interface SiteRouter {
  readonly path: string;

  // Routers that can't leverage Route can also provide
  // a simple router that do the route handling by themselves
  readonly routes: ConfiguredRoute[] | Router;
}
