<script setup lang="ts">
import { css } from "@emotion/css";
import { contentSpacingConfig } from "@blog/frontend/config/content/spacing";
import { spacingConfig } from "@blog/frontend/config/theme/spacing";

const className = css`
  ul ul & {
    margin-left: ${spacingConfig[contentSpacingConfig.md]};
  }
`;
</script>
<template>
  <li :class="className">
    <slot />
  </li>
</template>
