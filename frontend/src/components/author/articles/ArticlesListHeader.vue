<script setup lang="ts">
import VHeading from "@/components/base/text/VHeading.vue";
import VLink from "@/components/base/VLink.vue";
import TextButton from "@/components/base/button/TextButton.vue";
import VRow from "@/components/base/layout/VRow.vue";
import { authorRoutes } from "@/lib/router/author";
import { greenButtonBg, greenButtonFg } from "@/config/content/color";
</script>

<template>
  <VRow justify="space-between" width="full">
    <VHeading size="lg" is="h1"> Articles </VHeading>

    <VLink :to="authorRoutes.home.route">
      <TextButton
        label="New Article"
        :show-border="false"
        :background-color="greenButtonBg"
        :color="greenButtonFg"
      />
    </VLink>
  </VRow>
</template>
