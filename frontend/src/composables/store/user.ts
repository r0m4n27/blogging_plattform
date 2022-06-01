import {
  type User,
  login as loginUser,
  register as registerUser,
} from "@/api/auth";
import { localStorageKeys } from "@/config/localStorage";
import { piniaKeysConfig } from "@/config/pinia";
import type { Option } from "@/lib/types";
import { defineStore } from "pinia";
import type { Ref } from "vue";
import { useLocalStorage } from "../util/localStorage";
import { useEmptyStore } from "./emptyStore";
import { visitorRoutes } from "@/lib/router/visitor";
import { FetchError } from "@/lib/fetch";

export interface UserState {
  value: Ref<Option<User>>;

  // Return true if the user was successfully logged in
  login: (username: string, password: string) => Promise<boolean>;
  register: (
    username: string,
    password: string,
    registerCode: string
  ) => Promise<boolean>;
  logout: () => void;

  fetchWithToken<T>(
    fetcher: (token: string) => Promise<T>
  ): Promise<T | undefined>;
  fetchWithToken<T>(
    fetcher: (token: string) => Promise<T>,
    defaultValue: T
  ): Promise<T>;
}

// Holds the user that is saved in the local storage
export const useUser = defineStore<string, UserState>(
  piniaKeysConfig.user,
  () => {
    const emptyStore = useEmptyStore();

    const user = useLocalStorage<string, User>(localStorageKeys.user);

    const login = async (username: string, password: string) => {
      const newUser = await loginUser(username, password);
      user.value = newUser;

      return newUser !== undefined;
    };

    const register = async (
      username: string,
      password: string,
      registerCode: string
    ) => {
      const newUser = await registerUser(username, password, registerCode);
      user.value = newUser;

      return newUser !== undefined;
    };

    // Remove the user and also just redirect to the home page
    // to not create a weird state
    const logout = () => {
      emptyStore.router.push(visitorRoutes.home.route);

      user.value = undefined;
    };

    const fetchWithToken = async <T>(
      fetcher: (token: string) => Promise<T>,
      defaultValue?: T
    ) => {
      try {
        const token = user.value?.token;
        if (token !== undefined) {
          return await fetcher(token);
        } else {
          return defaultValue;
        }
      } catch (e) {
        if (e instanceof FetchError && e.statusCode === 401) {
          logout();
          return defaultValue;
        } else {
          throw e;
        }
      }
    };

    return {
      value: user,
      login,
      logout,
      register,
      fetchWithToken,
    };
  }
);
