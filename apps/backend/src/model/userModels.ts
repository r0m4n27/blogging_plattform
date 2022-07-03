import { User } from "@prisma/client";
import { z } from "zod";

export type UserResponse = Pick<User, "id" | "username">;

export type FullUserResponse = Omit<User, "password">;

export const updateUserSchema = z.object({
  password: z.string(),
});

export type UpdateUserSchema = z.infer<typeof updateUserSchema>;
