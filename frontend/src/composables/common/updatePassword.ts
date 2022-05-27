import { ref, type Ref } from "vue";

export interface UpdatePasswordState {
  newPassword: Ref<string>;
  secondNewPassword: Ref<string>;
  showError: Ref<boolean>;
  updatePassword: () => void;
}

interface UpdatePasswordEmits {
  (e: "updatePassword", password: string): void;
}

export const useUpdatePasswordState = (
  emit: UpdatePasswordEmits
): UpdatePasswordState => {
  const newPassword = ref("");
  const secondNewPassword = ref("");

  const showError = ref(false);

  const updatePassword = () => {
    if (newPassword.value === secondNewPassword.value) {
      const password = newPassword.value;

      newPassword.value = "";
      secondNewPassword.value = "";
      showError.value = false;

      emit("updatePassword", password);
    } else {
      showError.value = true;
    }
  };

  return {
    newPassword,
    secondNewPassword,
    updatePassword,
    showError,
  };
};
