import type { SiteRouter } from "@blog/backend/common/siteRouter";
import { type Request, type Response, Router } from "express";
import fetch from "node-fetch";

export class ImageRouter implements SiteRouter {
  readonly path: string = "/images";
  readonly routes: Router;

  constructor() {
    this.routes = Router();

    this.routes.get("/:url", this.handleImageUrl);
  }

  private handleImageUrl = async (req: Request, res: Response) => {
    const url = req.params["url"];

    // fetch from 'node-fetch' is used
    // because typescript could't figure out that
    // node18 was used
    const imageResponse = await fetch(url);

    if (imageResponse.ok) {
      res.send(await imageResponse.buffer());
    } else {
      res.status(400).json({ message: "Can't fetch image!" });
    }
  };
}
