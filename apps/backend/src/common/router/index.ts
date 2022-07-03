import type { Request, Response, Router } from "express";
import {
  HttpException,
  type Middleware,
  Req,
  type RouteHandler,
  type RouteMethod,
} from "./types";

// The typesafety is provided with the router itself
// rather than the list of middleware
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UnknownMiddleware = Middleware<any, any>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyReq = Req<any, any, any, any>;
type UnknownRouteHandler = RouteHandler<AnyReq>;

export type ConfiguredRoute = Route<never, true>;
export type UnconfiguredRoute<PrevRequest extends Req> = Route<
  PrevRequest,
  false
>;

// Idea for this is inspired by: https://github.com/akheron/typera
//
// The route works a bit different that the the middleware in express
// Rather than working on the same request and response object at the same time
// the middleware in the route transforms the incoming request into another one
// or returns a response. If the a response is returned the chain is canceled
// and the response is forwarded to express. If the chain completes the last request
// is passed the the route handler which returns a response. (and is passed to express)
//
// The typesafety is insured by saving the return type of the previous
// middleware in the route
// When the 'use' function is called, the PrevRequest type is changed accordingly.
//
// There is also the generic Parameter 'Configured' it is used to determine
// wether the handle function was called. With this the apply function
// is only called when a handler was configured
//
// Also after calling the handle function the function no new middleware can
// be applied since we then can't determine the typesafety of the requests anymore
//
// ConfiguredType is a guard for applying the handler so ignore that it is not used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class Route<PrevRequest extends Req, _Configured = false> {
  constructor(
    private readonly path: string,
    private readonly method: RouteMethod,
    private readonly middlewareList: UnknownMiddleware[] = [],
    private readonly routeHandler?: UnknownRouteHandler,
  ) {}

  static get = (path: string) => new Route(path, "get");
  static post = (path: string) => new Route(path, "post");
  static delete = (path: string) => new Route(path, "delete");
  static patch = (path: string) => new Route(path, "patch");

  use = <NextRequest extends Req>(
    middleware: Middleware<PrevRequest, NextRequest>,
  ): UnconfiguredRoute<NextRequest> => {
    return new Route(
      this.path,
      this.method,
      [...this.middlewareList, middleware],
      this.routeHandler,
    );
  };

  handle = (handlerFunction: RouteHandler<PrevRequest>): ConfiguredRoute => {
    return new Route(
      this.path,
      this.method,
      this.middlewareList,
      handlerFunction as unknown as UnknownRouteHandler,
    );
  };

  apply = (expressRouter: this extends ConfiguredRoute ? Router : never) => {
    expressRouter[this.method](this.path, this.expressHandler);
  };

  private expressHandler = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    const request = Req.fromExpressRequest(req);

    for (const middleware of this.middlewareList) {
      try {
        await middleware(request);
      } catch (e) {
        return this.handleError(res, e);
      }
    }

    try {
      if (this.routeHandler === undefined) {
        throw new Error("RouteHandler is undefined which can't happen");
      }

      const result = await this.routeHandler(request);

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
