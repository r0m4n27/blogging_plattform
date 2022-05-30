import type { AdminUser } from "@/api/user";
import { usePageTitle } from "@/composables/head/pageTitle";
import { getAdminUsers, deleteUser as deleteUserInternal } from "@/api/user";
import { useEndpoint } from "@/composables/util/endpoint";
import { computed, type ComputedRef, type Ref } from "vue";
import { useUser } from "@/composables/store/user";
import {
  getRegisterCodes,
  deleteRegisterCode,
  createRegisterCode,
} from "@/api/registerCodes";
import { promise } from "@/lib/promise";

export interface HomePageState {
  users: Ref<AdminUser[]>;
  deleteUser: ComputedRef<(user: AdminUser) => Promise<void>>;

  codes: Ref<string[]>;
  deleteCode: ComputedRef<(code: string) => Promise<void>>;
  createCode: ComputedRef<() => Promise<void>>;
}

export const useHomePageState = (): HomePageState => {
  usePageTitle("Users");

  const { users, deleteUser } = useUsersInteractions();

  const { codes, createCode, deleteCode } = useSiteConfigInteractions();

  return { users, deleteUser, codes, deleteCode, createCode };
};

const useSiteConfigInteractions = () => {
  const user = useUser();

  const codesFetcher = computed(
    () => () => user.token ? getRegisterCodes(user.token) : promise([])
  );
  const { value: codes, refetch: refetchCodes } = useEndpoint(codesFetcher, []);

  const deleteCode = computed(() => async (registerCode: string) => {
    if (user.token !== undefined) {
      await deleteRegisterCode(registerCode, user.token);
      refetchCodes.value();
    }
  });

  const createCode = computed(() => async () => {
    if (user.token !== undefined) {
      await createRegisterCode(user.token);
      refetchCodes.value();
    }
  });

  return {
    codes,
    deleteCode,
    createCode,
  };
};

const useUsersInteractions = () => {
  const user = useUser();
  const usersFetcher = computed(
    () => () => user.token ? getAdminUsers(user.token) : promise([])
  );
  const { value: users, refetch: refetchUsers } = useEndpoint(usersFetcher, []);

  const deleteUser = computed(() => async (userToDelete: AdminUser) => {
    if (user.token !== undefined) {
      await deleteUserInternal(user.token, userToDelete);
      refetchUsers.value();
    }
  });

  return { users, deleteUser };
};
