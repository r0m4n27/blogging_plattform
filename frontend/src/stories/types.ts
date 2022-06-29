import type { DecoratorFunction } from "@storybook/csf";
import type { VueFramework } from "@storybook/vue3";

// Reexport decorator function with Vue3 type
export type SBDecorator = DecoratorFunction<VueFramework>;
