<script setup lang="ts">
import VCard from "../base/layout/VCard.vue";
import VColumn from "../base/layout/VColumn.vue";
import VHeading from "../base/text/VHeading.vue";
import LoginField from "./LoginField.vue";
import { contentSpacingConfig } from "@/config/content/spacing";
import TextButton from "../base/button/TextButton.vue";
import { getColor } from "@/config/theme/colors";
import { ref } from "vue";

const username = ref("");
const password = ref("");

const emit = defineEmits(["login"]);

const login = () => emit("login", username.value, password.value);
</script>

<template>
  <VCard :width="{ sm: 'full', md: 'md' }" :padding="contentSpacingConfig.md">
    <VColumn :gap="contentSpacingConfig.sm" align="start">
      <VColumn width="full">
        <VHeading is="h1" size="xl">Login</VHeading>
      </VColumn>

      <LoginField label="Username" v-model:input-value="username" />
      <LoginField
        label="Password"
        input-type="password"
        v-model:input-value="password"
      />

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
