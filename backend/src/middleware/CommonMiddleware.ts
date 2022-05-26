import { createErrorResponse } from "@/common/express";
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
}
