import type { Option } from "@/lib/types";

export type UserType = "author" | "admin";

export interface User {
  token: string;
  type: UserType;
}

export const login = async (
  username: string,
  password: string
): Promise<Option<User>> => {
  return {
    token: `${username}:${password}`,
    type: "admin",
  };

  return undefined;
};

export const updatePassword = async (newPassword: string): Promise<void> => {
  return;
};
