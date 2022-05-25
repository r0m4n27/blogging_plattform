import { UserRole } from "@prisma/client";
import { z } from "zod";

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
    registerCode: z.string(),
  }),
);

export type RegisterPayload = z.infer<typeof registerPayloadSchema>;
