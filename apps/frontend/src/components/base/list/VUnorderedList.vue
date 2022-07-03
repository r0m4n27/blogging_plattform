<script setup lang="ts">
import { css } from "@emotion/css";
import { contentSpacingConfig } from "@/config/content/spacing";

const className = css`
  list-style-position: inside;
  ul > ul > li {
    margin-left: ${contentSpacingConfig.md};
  }
`;
</script>

<template>
  <ul :class="className">
    <slot />
  </ul>
</template>
