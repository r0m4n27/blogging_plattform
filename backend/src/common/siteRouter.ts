import { ConfiguredRoute } from "./router";

export interface SiteRouter {
  readonly path: string;
  readonly routes: ConfiguredRoute[];
}
