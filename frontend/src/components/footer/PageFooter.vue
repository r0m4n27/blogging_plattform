<script setup lang="ts">
import VColumn from "../base/layout/VColumn.vue";
import VRow from "../base/layout/VRow.vue";
import VContainer from "../base/layout/VContainer.vue";
import PageFooterLink from "./PageFooterLink.vue";
import { contactLink } from "@/config/components/pageFooter";
import { contentSpacingConfig } from "@/config/content/spacing";
import { contentColorConfig } from "@/config/content/color";
import VBox from "../base/layout/VBox.vue";
import ContentDivider from "../util/ContentDivider.vue";
import { usePageFooterState } from "@/composables/usePageFooterState";

const state = usePageFooterState();
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
            :name="contactLink.name"
            :is-external="contactLink.isExternal"
            :destination="contactLink.destination"
          />

          <PageFooterLink
            v-if="state.onClick === undefined"
            :name="state.secondLinkName"
            :destination="state.secondLinkDestination"
            :is-external="false"
          />
          <PageFooterLink
            v-else
            :name="state.secondLinkName"
            :destination="state.secondLinkDestination"
            :is-external="false"
            @click="state.onClick"
          />
        </VRow>
      </VColumn>
    </VContainer>
  </VBox>
</template>
