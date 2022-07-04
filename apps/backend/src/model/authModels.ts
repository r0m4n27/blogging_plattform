import type { Req } from "@blog/backend/common/router/types";
import type { User, UserRole } from "@prisma/client";
import { z } from "zod";

// Return also a role in the auth response
// Then the used doesn't need to decode the jwt token
export interface AuthResponse {
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

export const registerPayloadSchema = loginPayloadSchema.and(
  z.object({
    registerCode: z.string().uuid(),
  }),
);

export type RegisterPayload = z.infer<typeof registerPayloadSchema>;

export type ReqWithUser<
  B = unknown,
  P = unknown,
  Q = unknown,
  E extends Record<string, unknown> = Record<string, never>,
> = Req<B, P, Q, E & { user: User }>;
