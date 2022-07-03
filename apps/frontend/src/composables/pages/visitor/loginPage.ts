import { ref, type Ref } from "vue";
import { useRouter } from "vue-router";
import { useUser } from "@/composables/store/user";

export interface LoginPageState {
  showError: Ref<boolean>;
  login: (username: string, password: string) => Promise<void>;
}

export const useLoginPageState = (): LoginPageState => {
  const user = useUser();
  const router = useRouter();

  const showError = ref(false);

  const login = async (username: string, password: string) => {
    const loginStatus = await user.login(username, password);

    // Return the the homepage if the login was successful
    if (loginStatus) {
      router.replace("/");
    } else {
      showError.value = true;
    }
  };

  return {
    login,
    showError,
  };
};
