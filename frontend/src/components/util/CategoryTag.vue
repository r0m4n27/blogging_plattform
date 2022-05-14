<script setup lang="ts">
import type { Category } from "@/api/category";
import VLink from "../base/VLink.vue";
import { computed } from "vue";
import type { Responsive } from "@/lib/responsive";
import { visitorRoutes } from "@/lib/router/visitor";
import TagButton from "../base/button/TagButton.vue";
import type { TagButtonSize } from "@/styling/props/tagButton";

interface SummaryTagProps {
  category: Category;
  size?: Responsive<TagButtonSize>;
}

const props = withDefaults(defineProps<SummaryTagProps>(), {
  size: "sm",
});

const categoryDestination = computed(() =>
  visitorRoutes.category.createRoute(props.category)
);
</script>

<template>
  <VLink :to="categoryDestination">
    <TagButton :size="size" :label="category.name" />
  </VLink>
</template>
