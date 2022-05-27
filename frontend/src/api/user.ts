import { post } from "@/lib/fetch";
import type { Option } from "@/lib/types";

export type UserRole = "AUTHOR" | "ADMIN";

export interface User {
  token: string;
  role: UserRole;
}

export interface AdminUser {
  id: string;
  name: string;
}

let mockAdminUsers: AdminUser[] = [
  {
    id: "1",
    name: "test1",
  },
  {
    id: "2",
    name: "test2",
  },
  {
    id: "3",
    name: "test3",
  },
  {
    id: "4",
    name: "test4",
  },
];

export const login = async (
  username: string,
  password: string
): Promise<Option<User>> => {
  try {
    return await post("/api/auth/login", {
      username: username.trim(),
      password,
    });
  } catch (e) {
    return undefined;
  }
};

export const updatePassword = async (newPassword: string): Promise<void> => {
  return;
};

export const fetchAdminUsers = async (): Promise<AdminUser[]> => {
  return mockAdminUsers;
};

export const deleteUser = async (user: AdminUser): Promise<void> => {
  mockAdminUsers = mockAdminUsers.filter((u) => u.id !== user.id);
};
