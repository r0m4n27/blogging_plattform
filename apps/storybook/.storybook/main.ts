import { type UserConfig, mergeConfig } from "vite";

import { createStorybookResolveConfig } from "@blog/config/src/vite.config";

export default {
  stories: ["../../frontend/src/**/*.stories.ts"],
  core: {
    builder: "@storybook/builder-vite",
  },
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/vue3",
  viteFinal: async (config: UserConfig) =>
    mergeConfig(config, { resolve: createStorybookResolveConfig(__dirname) }),
};
