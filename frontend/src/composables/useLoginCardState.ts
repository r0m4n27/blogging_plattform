import { ref, type Ref } from "vue";

export interface LoginCardState {
  username: Ref<string>;
  password: Ref<string>;

  login: () => void;
}
export const useLoginCardState = (): LoginCardState => {
  const username = ref("");
  const password = ref("");

  const login = () => {
    console.log("Logging in...");
  };

  return {
    username,
    password,
    login,
  };
};
