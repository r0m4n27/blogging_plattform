import { z } from "zod";

// Schema used for validating the params of the url
// Every item that can addressed by the id uses
// an UUID for it
export const idParamsSchema = z.object({
  id: z.string().uuid(),
});

export type IdParamsModel = z.infer<typeof idParamsSchema>;
