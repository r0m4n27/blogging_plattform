import { UserRole } from "@prisma/client";
import { z } from "zod";

export interface LoginResponse {
  token: string;
  role: UserRole;
}

export interface LoginToken {
  username: string;
  role: UserRole;
}

export const loginPayloadSchema = z.object({
  username: z.string().trim(),
  password: z.string(),
});

export type LoginPayload = z.infer<typeof loginPayloadSchema>;
