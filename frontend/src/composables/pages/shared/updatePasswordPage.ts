import { updatePassword as updatePasswordInternal } from "@/api/user";
import { useUser } from "@/composables/store/user";
import { computed, ref, type ComputedRef, type Ref } from "vue";

export interface UpdatePasswordPageState {
  passwordUpdated: Ref<boolean>;
  updatePassword: ComputedRef<(newPassword: string) => Promise<void>>;
}

export const useUpdatePassword = (): UpdatePasswordPageState => {
  const passwordUpdated = ref(false);
  const user = useUser();

  const updatePassword = computed(() => async (newPassword: string) => {
    if (user.token !== undefined) {
      await updatePasswordInternal(newPassword, user.token);
      passwordUpdated.value = true;
    }
  });

  return {
    passwordUpdated,
    updatePassword,
  };
};
