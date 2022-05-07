<script setup lang="ts">
import VHeading from "@/components/base/text/VHeading.vue";
import VLink from "@/components/base/VLink.vue";
import TextButton from "@/components/base/button/TextButton.vue";
import VRow from "@/components/base/layout/VRow.vue";
import { authorRoutes } from "@/lib/router/author";
import { getColor } from "@/config/theme/colors";
</script>

<template>
  <VRow justify="space-between" width="full">
    <VHeading size="lg" is="h1"> Articles </VHeading>

    <VLink :to="authorRoutes.home.route">
      <TextButton
        label="New Article"
        :show-border="false"
        :background-color="{
          light: getColor('green', 400),
          dark: getColor('green', 300),
        }"
        :color="{
          light: getColor('white'),
          dark: getColor('gray', 700),
        }"
      />
    </VLink>
  </VRow>
</template>
