import { NextFunction, Request, Response, Router } from "express";
import {
  ParamsDictionary,
  Query as ExpressQuery,
} from "express-serve-static-core";

export type RouteMethod = "get" | "post" | "delete" | "patch";

export interface Req<
  Body = unknown,
  Params extends ParamsDictionary = Record<string, string>,
  Query extends ExpressQuery = Record<string, string>,
> {
  type: "request";
  body: Body;
  params: Params;
  query: Query;
}

export interface Res<Body = unknown> {
  type: "response";
  body: Body;
  status: number;
}

export type MiddlewareResponse<
  Body,
  Params extends ParamsDictionary,
  Query extends ExpressQuery = Record<string, string>,
> = Promise<Req<Body, Params, Query> | Res>;

export type Middleware<
  PrevBody,
  PrevParams extends ParamsDictionary,
  PrevQuery extends ExpressQuery,
  NextBody,
  NextParams extends ParamsDictionary,
  NextQuery extends ExpressQuery,
> = (
  res: Req<PrevBody, PrevParams, PrevQuery>,
) => MiddlewareResponse<NextBody, NextParams, NextQuery>;

type UnknownMiddleware = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  req: Req<any, any, any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) => Promise<Req<any, any, any> | Res<any>>;

// Idea for this is inspired by: https://github.com/akheron/typera
export class Route<
  Body = unknown,
  Params extends ParamsDictionary = Record<string, string>,
  Query extends ExpressQuery = Record<string, string>,
> {
  private readonly middlewareList: UnknownMiddleware[];
  private routeHandler:
    | undefined
    | ((req: Req<Body, Params, Query>) => Promise<Res>);

  constructor(
    private readonly path: string,
    private readonly method: RouteMethod,
  ) {
    this.middlewareList = [];
    this.routeHandler = undefined;
  }

  static get = (path: string) => new Route(path, "get");
  static post = (path: string) => new Route(path, "post");
  static delete = (path: string) => new Route(path, "delete");
  static patch = (path: string) => new Route(path, "patch");

  use = <
    NextBody,
    NextParams extends ParamsDictionary,
    NextQuery extends ExpressQuery,
  >(
    middleware: Middleware<
      Body,
      Params,
      Query,
      NextBody,
      NextParams,
      NextQuery
    >,
  ): Route<NextBody, NextParams, NextQuery> => {
    this.middlewareList.push(middleware);

    return this as unknown as Route<NextBody, NextParams, NextQuery>;
  };

  handler = (
    handlerFunction: (req: Req<Body, Params, Query>) => Promise<Res>,
  ): Route<never, never, never> => {
    this.routeHandler = handlerFunction;

    return this as unknown as Route<never, never, never>;
  };

  apply = (expressRouter: Router) => {
    expressRouter[this.method](
      this.path,
      this.expressMiddlewareHandler,
      this.expressFinalHandler,
    );
  };

  private expressMiddlewareHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const previousRequest = {
      type: "request",
      body: req.body,
      params: req.params as Params,
      query: req.query as Query,
    } as const;

    for (const middleware of this.middlewareList) {
      const result = await middleware(previousRequest);
      if (result.type === "request") {
        Object.assign(previousRequest, result);
      } else {
        res.status(result.status).json(result.body);
        return;
      }
    }

    next();
  };

  private expressFinalHandler = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    if (this.routeHandler === undefined)
      throw new Error("Route Handler was not set!");

    const result = await this.routeHandler({
      type: "request",
      body: req.body,
      params: req.params as Params,
      query: req.query as Query,
    });

    res.status(result.status).json(result.body);
  };
}
