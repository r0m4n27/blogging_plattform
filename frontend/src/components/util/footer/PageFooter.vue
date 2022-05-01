<script setup lang="ts">
import VColumn from "../../base/layout/VColumn.vue";
import VRow from "../../base/layout/VRow.vue";
import VContainer from "../../base/layout/VContainer.vue";
import PageFooterLink from "./PageFooterLink.vue";
import { footerLinks } from "@/config/components/pageFooter";
import { contentSpacingConfig } from "@/config/content/spacing";
import { contentColorConfig } from "@/config/content/color";
import VBox from "../../base/layout/VBox.vue";
import ContentDivider from "../ContentDivider.vue";
</script>

<template>
  <VBox width="full" :background-color="contentColorConfig.highlightedBg">
    <ContentDivider />

    <VContainer size="lg">
      <VColumn :height="12" align="start" justify="center">
        <VRow
          :gap="contentSpacingConfig.md"
          :padding="{ x: contentSpacingConfig.xs, y: 0 }"
        >
          <PageFooterLink
            v-for="link in footerLinks"
            :key="link.name"
            :link="link"
          />
        </VRow>
      </VColumn>
    </VContainer>
  </VBox>
</template>
