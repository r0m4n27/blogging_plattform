<script setup lang="ts">
import type { SVGProps } from "lucide-vue-next";
import { computed, type FunctionalComponent } from "vue";

// Type extracted from the lucide icon package
export type Icon = (props: SVGProps) => FunctionalComponent<SVGProps>;

interface IconButtonProps {
  icon: Icon;
  onClick: () => void;
  buttonClasses?: string[];
  iconClasses?: string[];
  // Negate showBorder because of:
  // https://vuejs.org/guide/components/props.html#boolean-casting
  dontShowBorder: boolean;
}

const props = defineProps<IconButtonProps>();

const buttonClasses = computed(() => {
  const buttonClasses = props.buttonClasses ?? [
    "bg-white",
    "dark:bg-gray-800",
    "hover:bg-gray-100",
    "dark:hover:bg-gray-700",
    "border-gray-200",
    "dark:border-blue-300",
  ];

  if (!props.dontShowBorder) {
    buttonClasses.push("border");
  }

  return buttonClasses;
});

const iconClasses = computed(
  () => props.iconClasses ?? ["text-gray-700", "dark:text-blue-300"]
);
</script>

<template>
  <button @click="onClick" class="p-2 rounded-md" :class="buttonClasses">
    <component :is="icon" class="w-6 h-6 text-base" :class="iconClasses" />
  </button>
</template>
