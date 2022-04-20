<script setup lang="ts">
import VColumn from "@/components/base/layout/VColumn.vue";
import VText from "@/components/base/text/VText.vue";
import { computed } from "vue";
import VBox from "../base/layout/VBox.vue";

// This component in the future would parse the content
// as markdown and could display more than just paragraphs
interface ArticleContentProps {
  content: string;
}

const props = defineProps<ArticleContentProps>();

const paragraphs = computed(() => props.content.split("\n\n"));
</script>

<template>
  <VColumn :gap="2">
    <template v-for="paragraph in paragraphs" :key="paragraph">
      <VText v-if="paragraph != ''" as="p">
        {{ paragraph }}
      </VText>
      <VBox v-else :height="2" />
    </template>
  </VColumn>
</template>
