<script setup lang="ts">
import TextInputField from "@/components/common/input/TextInputField.vue";
import { computed, ref } from "vue";
import InputFormLayout from "../../common/layout/InputFormLayout.vue";

interface LoginCardProps {
  showError: boolean;
}

interface LoginCardsEmits {
  (
    e: "register",
    username: string,
    password: string,
    registerCode: string
  ): void;
}

const props = defineProps<LoginCardProps>();
const emit = defineEmits<LoginCardsEmits>();

const username = ref("");
const password = ref("");
const registerCode = ref("");

const register = () =>
  emit("register", username.value, password.value, registerCode.value);

const errorText = computed(() =>
  props.showError ? "Password does not match!" : undefined
);
</script>

<template>
  <InputFormLayout
    title="Register"
    submit-button-label="Register"
    :error-text="errorText"
    @click="register"
  >
    <TextInputField
      label="Username"
      v-model:input-value="username"
      width="full"
    />
    <TextInputField
      label="Password"
      input-type="password"
      v-model:input-value="password"
      width="full"
    />
    <TextInputField
      label="Register Code"
      v-model:input-value="registerCode"
      width="full"
    />
  </InputFormLayout>
</template>
