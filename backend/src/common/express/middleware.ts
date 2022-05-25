import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { createErrorResponse } from ".";

export const validateBody =
  <T>(schema: z.ZodSchema<T>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await schema.safeParseAsync(req.body);

    if (!result.success) {
      createErrorResponse(res, "Malformed body!");
    } else {
      next();
    }
  };
