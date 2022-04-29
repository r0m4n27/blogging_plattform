<script setup lang="ts">
import VColumn from "@/components/base/layout/VColumn.vue";
import VText from "@/components/base/text/VText.vue";
import { computed } from "vue";
import VBox from "../base/layout/VBox.vue";
import { contentSpacingConfig } from "@/config/content/spacing";

// This component in the future would parse the content
// as markdown and could display more than just paragraphs
interface ArticleContentProps {
  content: string;
}

const props = defineProps<ArticleContentProps>();

const paragraphs = computed(() => props.content.split("\n\n"));
</script>

<template>
  <VColumn :gap="contentSpacingConfig.sm" is="article">
    <template v-for="paragraph in paragraphs" :key="paragraph">
      <VText v-if="paragraph != ''" is="p" :size="{ sm: 'sm', md: 'md' }">
        {{ paragraph }}
      </VText>
      <VBox v-else :height="contentSpacingConfig.sm" />
    </template>
  </VColumn>
</template>
