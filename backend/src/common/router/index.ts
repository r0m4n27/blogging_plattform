import { NextFunction, Request, Response, Router } from "express";
import { HttpException, Middleware, Req, RouteMethod } from "./types";

// The typesafety is provided with the router itself
// rather than the list of middleware
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UnknownMiddleware = Middleware<any, any>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyReq = Req<any, any, any, any>;

export type ConfiguredRoute = Route<never, true>;

// Idea for this is inspired by: https://github.com/akheron/typera
//
// The route works a bit different that the the middleware in express
// Rather than working on the same request and response object at the same time
// the middleware in the route transforms the incoming request into another one
// or returns a response. If the a response is returned the chain is canceled
// and the response is forwarded to express. If the chain completes the last request
// is passed the the route handler which returns a response. (and is passed to express)
//
// There could be the problem that every Middleware creates a new request
// which cloud theoretically impact the performance
//
// The typesafety is insured by saving the return type of the previous
// middleware in the route
// When the 'use' function is called, the PrevRequest type is changed accordingly.
// If the route is not used with the fluent api, the types will get wrong.
//
// There is also the generic Parameter 'Configured' it is used to determine
// wether the handle function was called. With this the apply function
// is only called when a handler was configured
//
// Also after calling the handle function the function no new middleware can
// be applied since we then can't determine the typesafety of the requests anymore
export class Route<PrevRequest extends Req, Configured = false> {
  private readonly middlewareList: UnknownMiddleware[];
  private routeHandler: undefined | ((req: PrevRequest) => Promise<unknown>);

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

  use = <NextRequest extends Req>(
    middleware: Middleware<PrevRequest, NextRequest>,
  ): Route<NextRequest, false> => {
    this.middlewareList.push(middleware);

    return this as unknown as Route<NextRequest, false>;
  };

  handle = (
    handlerFunction: (req: PrevRequest) => Promise<unknown>,
  ): Route<never, true> => {
    this.routeHandler = handlerFunction;

    return this as unknown as Route<never, true>;
  };

  apply = (expressRouter: Configured extends true ? Router : never) => {
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
    let previousRequest: AnyReq = {
      body: req.body,
      params: req.params,
      query: req.query,
      extras: {},

      actualRequest: req,
    };

    for (const middleware of this.middlewareList) {
      try {
        previousRequest = await middleware(previousRequest);
      } catch (e) {
        return this.handleError(res, e);
      }
    }

    if (this.middlewareList.length !== 0) {
      Object.assign(req, previousRequest);
    }

    next();
  };

  private expressFinalHandler = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    if (this.routeHandler === undefined)
      throw new Error("Route Handler was not set!");

    try {
      const result = await this.routeHandler({
        body: req.body,
        params: req.params,
        query: req.query,
        extras: req.extras,

        actualRequest: req,
      } as PrevRequest);

      const status = this.method === "post" ? 201 : 200;
      res.status(status).json(result);
    } catch (e) {
      return this.handleError(res, e);
    }
  };

  private handleError = (res: Response, e: unknown): void => {
    if (e instanceof HttpException) {
      res.status(e.status).json({
        message: e.message,
      });
    } else {
      throw e;
    }
  };
}
