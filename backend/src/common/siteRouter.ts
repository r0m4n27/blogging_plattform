import { Router } from "express";

export interface SiteRouter {
  readonly path: string;
  readonly router: Router;
}
