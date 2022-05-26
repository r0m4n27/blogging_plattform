import { User } from "@prisma/client";
import { Request, Response } from "express";
import { ParamsDictionary, Query } from "express-serve-static-core";

declare module "express-serve-static-core" {
  interface Request {
    injected: {
      user?: User;
    };
  }
}
export interface ErrorResponse {
  message: string;
}

export type ResponseWithError<
  T,
  Locals extends Record<string, unknown> = Record<string, unknown>,
> = Response<T | ErrorResponse, Locals>;

export const createErrorResponse = (
  res: Response<ErrorResponse>,
  message: string,
  statusCode = 400,
) => {
  res.status(statusCode).json({
    message,
  });
};

export type RequestWithBody<
  T,
  P = ParamsDictionary,
  ResBody = unknown,
  ReqQuery = Query,
  Locals extends Record<string, unknown> = Record<string, unknown>,
> = Request<P, ResBody, T, ReqQuery, Locals>;
