import { updatePassword as updatePasswordInternal } from "@blog/frontend/api/user";
import { useUser } from "@blog/frontend/composables/store/user";
import { computed, ref, type ComputedRef, type Ref } from "vue";

export interface UpdatePasswordPageState {
  passwordUpdated: Ref<boolean>;
  updatePassword: ComputedRef<(newPassword: string) => Promise<void>>;
}

export const useUpdatePassword = (): UpdatePasswordPageState => {
  const passwordUpdated = ref(false);
  const user = useUser();

  const updatePassword = computed(() => async (newPassword: string) => {
    await user.fetchWithToken(updatePasswordInternal(newPassword));
    passwordUpdated.value = true;
  });

  return {
    passwordUpdated,
    updatePassword,
  };
};
