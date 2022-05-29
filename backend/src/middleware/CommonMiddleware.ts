import { createErrorResponse } from "@/common/express";
import { HttpException, Req } from "@/common/router/types";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export class CommonMiddleware {
  readonly validateBody =
    <T>(schema: z.ZodSchema<T>) =>
    async (req: Request, res: Response, next: NextFunction) => {
      const result = await schema.safeParseAsync(req.body);

      if (!result.success) {
        return createErrorResponse(res, "Malformed body!");
      } else {
        next();
      }
    };

  validateBodyNew =
    <B extends z.ZodTypeAny>(schema: B) =>
    async <P, Q, E>(
      req: Req<unknown, P, Q, E>,
    ): Promise<Req<z.infer<B>, P, Q, E>> => {
      try {
        const result = await schema.parseAsync(req.body);
        return {
          ...req,
          params: result,
        };
      } catch {
        throw new HttpException("Malformed body!");
      }
    };

  validateQuery =
    <Q extends z.ZodTypeAny>(schema: Q) =>
    async <B, P, E>(
      req: Req<B, P, unknown, E>,
    ): Promise<Req<B, P, z.infer<Q>, E>> => {
      try {
        const result = await schema.parseAsync(req.query);
        return {
          ...req,
          query: result,
        };
      } catch {
        throw new HttpException("Malformed query!");
      }
    };

  validateParams =
    <P extends z.ZodTypeAny>(schema: P) =>
    async <B, Q, E>(
      req: Req<B, unknown, Q, E>,
    ): Promise<Req<B, z.infer<P>, Q, E>> => {
      try {
        const result = await schema.parseAsync(req.params);
        return {
          ...req,
          params: result,
        };
      } catch {
        throw new HttpException("Malformed params!");
      }
    };
}
