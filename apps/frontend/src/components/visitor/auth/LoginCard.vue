<script setup lang="ts">
import TextInputField from "@blog/frontend/components/common/input/TextInputField.vue";
import { computed, ref } from "vue";
import VText from "@blog/frontend/components/base/text/VText.vue";
import VLink from "../../base/VLink.vue";
import { visitorRoutes } from "@blog/frontend/lib/router/visitor";
import InputFormLayout from "../../common/layout/InputFormLayout.vue";
import { blueButtonBg } from "@blog/frontend/config/content/color";

interface LoginCardProps {
  showError: boolean;
}

interface LoginCardsEmits {
  (e: "login", username: string, password: string): void;
}

const props = defineProps<LoginCardProps>();
const emit = defineEmits<LoginCardsEmits>();

const username = ref("");
const password = ref("");

const login = () => emit("login", username.value, password.value);
const errorText = computed(() =>
  props.showError ? "Password does not match!" : undefined,
);
</script>

<template>
  <InputFormLayout
    title="Login"
    submit-button-label="Login"
    :error-text="errorText"
    @click="login"
  >
    <TextInputField label="Username" v-model:input-value="username" width="full" />
    <TextInputField
      label="Password"
      input-type="password"
      v-model:input-value="password"
      width="full"
    />

    <template #extra>
      <VLink :to="visitorRoutes.register.route">
        <VText :color="blueButtonBg"> No Account? Register now </VText>
      </VLink>
    </template>
  </InputFormLayout>
</template>
