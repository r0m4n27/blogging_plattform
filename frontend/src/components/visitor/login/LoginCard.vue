<script setup lang="ts">
import VCard from "@/components/base/layout/VCard.vue";
import VColumn from "@/components/base/layout/VColumn.vue";
import VHeading from "@/components/base/text/VHeading.vue";
import TextInputField from "@/components/input/TextInputField.vue";
import { contentSpacingConfig } from "@/config/content/spacing";
import TextButton from "@/components/base/button/TextButton.vue";
import { getColor } from "@/config/theme/colors";
import { ref } from "vue";
import VText from "@/components/base/text/VText.vue";

interface LoginCardProps {
  showError: boolean;
}

interface LoginCardsEmits {
  (e: "login", username: string, password: string): void;
}

defineProps<LoginCardProps>();
const emit = defineEmits<LoginCardsEmits>();

const username = ref("");
const password = ref("");

const login = () => emit("login", username.value, password.value);
</script>

<template>
  <VCard :width="{ sm: 'sm', md: 'md' }" :padding="contentSpacingConfig.md">
    <VColumn :gap="contentSpacingConfig.sm" align="start" is="form">
      <VColumn width="full">
        <VHeading is="h1" size="xl">Login</VHeading>
      </VColumn>

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

      <VText
        :color="{
          light: getColor('red', 400),
          dark: getColor('red', 400),
        }"
        v-if="showError"
      >
        Password does not match!
      </VText>

      <TextButton
        @click="login"
        label="Login"
        width="full"
        :show-border="false"
        :background-color="{
          light: getColor('blue', 400),
          dark: getColor('blue', 300),
        }"
        :color="{
          light: getColor('white'),
          dark: getColor('whiteAlpha', 900),
        }"
      />
    </VColumn>
  </VCard>
</template>
