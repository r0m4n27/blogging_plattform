import { ref, type Ref } from "vue";
import { useRouter } from "vue-router";
import { useUser } from "@blog/frontend/composables/store/user";

export interface RegisterPageState {
  showError: Ref<boolean>;
  register: (username: string, password: string, registerCode: string) => Promise<void>;
}

export const useRegisterPageState = (): RegisterPageState => {
  const user = useUser();
  const router = useRouter();

  const showError = ref(false);

  const register = async (username: string, password: string, registerCode: string) => {
    const loginStatus = await user.register(username, password, registerCode);

    if (loginStatus) {
      router.replace("/");
    } else {
      showError.value = true;
    }
  };

  return {
    register,
    showError,
  };
};
