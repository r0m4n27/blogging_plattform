import { HttpException, Req } from "@/common/router/types";
import { z } from "zod";

// Reorder the fields of the ZodSchema to be generic over the input
// and Output for in the middleware
type ZodSchema<
  Input,
  Output,
  Def extends z.ZodTypeDef = z.ZodTypeDef,
> = z.ZodSchema<Output, Def, Input>;

export class CommonMiddleware {
  validateBody =
    <InputBody, OutputBody>(schema: ZodSchema<InputBody, OutputBody>) =>
    async <P, Q, E extends Record<string, unknown>>(
      req: Req<unknown, P, Q, E>,
    ): Promise<Req<OutputBody, P, Q, E>> => {
      try {
        const result = await schema.parseAsync(req.body);
        return req.setBody(result);
      } catch {
        throw new HttpException("Malformed body!");
      }
    };

  validateQuery =
    <InputQuery, OutputQuery>(schema: ZodSchema<InputQuery, OutputQuery>) =>
    async <B, P, E extends Record<string, unknown>>(
      req: Req<B, P, unknown, E>,
    ): Promise<Req<B, P, OutputQuery, E>> => {
      try {
        const result = await schema.parseAsync(req.query);
        return req.setQuery(result);
      } catch {
        throw new HttpException("Malformed query!");
      }
    };

  validateParams =
    <InputParams, OutputParams>(schema: ZodSchema<InputParams, OutputParams>) =>
    async <B, Q, E extends Record<string, unknown>>(
      req: Req<B, unknown, Q, E>,
    ): Promise<Req<B, OutputParams, Q, E>> => {
      try {
        const result = await schema.parseAsync(req.params);
        return req.setParams(result);
      } catch {
        throw new HttpException("Malformed params!");
      }
    };
}
