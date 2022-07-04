import type { AdminUser } from "@blog/frontend/api/user";
import { usePageTitle } from "@blog/frontend/composables/head/pageTitle";
import {
  getAdminUsers,
  deleteUser as deleteUserInternal,
} from "@blog/frontend/api/user";
import { useEndpoint } from "@blog/frontend/composables/util/endpoint";
import { computed, type ComputedRef, type Ref } from "vue";
import { useUser } from "@blog/frontend/composables/store/user";
import {
  getRegisterCodes,
  deleteRegisterCode,
  createRegisterCode,
} from "@blog/frontend/api/registerCodes";

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

  const codesFetcher = computed(() => () => user.fetchWithToken(getRegisterCodes, []));
  const { value: codes, refetch: refetchCodes } = useEndpoint(codesFetcher, []);

  const deleteCode = computed(() => async (registerCode: string) => {
    await user.fetchWithToken(deleteRegisterCode(registerCode));
    refetchCodes.value();
  });

  const createCode = computed(() => async () => {
    await user.fetchWithToken(createRegisterCode);
    refetchCodes.value();
  });

  return {
    codes,
    deleteCode,
    createCode,
  };
};

const useUsersInteractions = () => {
  const user = useUser();
  const usersFetcher = computed(() => () => user.fetchWithToken(getAdminUsers, []));
  const { value: users, refetch: refetchUsers } = useEndpoint(usersFetcher, []);

  const deleteUser = computed(() => async (userToDelete: AdminUser) => {
    await user.fetchWithToken(deleteUserInternal(userToDelete));
    refetchUsers.value();
  });

  return { users, deleteUser };
};
