import { Request } from "express";

declare module "express-serve-static-core" {
  interface Request {
    extras: unknown;
  }
}

export type RouteMethod = "get" | "post" | "delete" | "patch";

// Body, Query, Params are the same as in the express Request
// Extras could contain additional parameters that are used for the
// request like the current signed in user
//
// To reduce the number of allocations the same class is returned
// when setting a property. The actual types are unknown and
// the typesafety in guaranteed by the generics
export class Req<
  Body = unknown,
  Params = unknown,
  Query = unknown,
  Extras extends Record<string, unknown> = Record<string, never>,
> {
  private _extras: Record<string, unknown> = {};

  constructor(
    private _body: unknown,
    private _params: unknown,
    private _query: unknown,
    // Kept because sometimes for example the headers need to be accessed
    readonly actualRequest: Request,
  ) {}

  static fromExpressRequest = (request: Request): Req =>
    new Req(request.body, request.params, request.query, request);

  get body(): Body {
    return this._body as Body;
  }

  setBody = <NewBody>(body: NewBody): Req<NewBody, Params, Query, Extras> => {
    this._body = body;

    return this as unknown as Req<NewBody, Params, Query, Extras>;
  };

  get params(): Params {
    return this._params as Params;
  }

  setParams = <NewParams>(
    params: NewParams,
  ): Req<Body, NewParams, Query, Extras> => {
    this._params = params;

    return this as unknown as Req<Body, NewParams, Query, Extras>;
  };

  get query(): Query {
    return this._query as Query;
  }

  setQuery = <NewQuery>(
    query: NewQuery,
  ): Req<Body, Params, NewQuery, Extras> => {
    this._query = query;

    return this as unknown as Req<Body, Params, NewQuery, Extras>;
  };

  get extras(): Extras {
    return this._extras as Extras;
  }

  setExtra = <Key extends string, Value>(
    key: Key,
    value: Value,
  ): Req<Body, Params, Query, Extras & { [K in Key]: Value }> => {
    this._extras[key] = value;

    return this as unknown as Req<
      Body,
      Params,
      Query,
      Extras & { [K in Key]: Value }
    >;
  };
}

export type Middleware<PrevRequest extends Req, NextReq extends Req> = (
  res: PrevRequest,
) => Promise<NextReq>;

export type RouteHandler<PrevRequest extends Req> = (
  req: PrevRequest,
) => Promise<unknown>;

export class HttpException {
  constructor(readonly message: string, readonly status: number = 400) {}
}
