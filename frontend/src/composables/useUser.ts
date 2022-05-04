import { type User, login as loginUser } from "@/api/user";
import { localStorageKeys } from "@/config/localStorage";
import { piniaKeysConfig } from "@/config/pinia";
import type { Option } from "@/lib/types";
import { defineStore } from "pinia";
import type { Ref } from "vue";
import { useLocalStorage } from "./useLocalStorage";

export interface UserState {
  value: Ref<Option<User>>;

  // Return true if the user was successfully logged in
  login: (username: string, password: string) => Promise<boolean>;
}

export const useUser = defineStore<string, UserState>(
  piniaKeysConfig.user,
  () => {
    const user = useLocalStorage<string, User>(localStorageKeys.user);

    const login = async (username: string, password: string) => {
      const newUser = await loginUser(username, password);
      user.value = newUser;

      return newUser !== undefined;
    };

    return {
      value: user,
      login,
    };
  }
);
