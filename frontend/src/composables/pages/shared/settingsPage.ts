import { updatePassword as updatePasswordInternal } from "@/api/user";
import { ref, type Ref } from "vue";

export interface SettingsPageState {
  passwordUpdated: Ref<boolean>;
  updatePassword: (newPassword: string) => Promise<void>;
}

export const useSettingsPageState = () => {
  const passwordUpdated = ref(false);

  const updatePassword = async (newPassword: string) => {
    await updatePasswordInternal(newPassword);
    passwordUpdated.value = true;
  };

  return {
    passwordUpdated,
    updatePassword,
  };
};
