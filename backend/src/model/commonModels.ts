import { z } from "zod";

export const idParamsSchema = z.object({
  id: z.string().uuid(),
});

export type IdParamsModel = z.infer<typeof idParamsSchema>;
