import type { Option } from "@/lib/types";

export interface User {
  token: string;
}

export const login = async (
  username: string,
  password: string
): Promise<Option<User>> => {
  return {
    token: `${username}:${password}`,
  };

  return undefined;
};
