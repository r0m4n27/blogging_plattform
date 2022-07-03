import path from "path";
import { UserConfig } from "vite";

export default {
  stories: ["../../frontend/src/**/*.stories.ts"],
  core: {
    builder: "@storybook/builder-vite",
  },
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/vue3",
  viteFinal: async (config: UserConfig) => {
    config.resolve ??= {};

    config.resolve.alias = {
      ...config.resolve.alias,
      "@blog/storybook": path.resolve(__dirname, "../src"),
      "@blog/frontend": path.resolve(__dirname, "../../frontend/src"),
      "@blog/backend": path.resolve(__dirname, "../../backend/src"),
    };

    return config;
  },
};
