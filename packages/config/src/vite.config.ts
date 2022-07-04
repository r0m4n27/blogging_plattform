import path from "path";

import type { ResolveOptions, AliasOptions } from "vite";

type ResolveOpts = ResolveOptions & {
  alias?: AliasOptions;
};

export const aliasMappings = {
  "@blog/frontend": "../../apps/frontend/src",
  "@blog/backend": "../../apps/backend/src",
  "@blog/storybook": "../../apps/storybook/src",
} as Record<string, string>;

export const createResolveConfig = (directory: string): ResolveOpts => {
  const alias: Record<string, string> = {};

  Object.keys(aliasMappings).map((key) => {
    alias[key] = path.resolve(directory, aliasMappings[key]);
  });

  return {
    alias,
  };
};

export const createStorybookResolveConfig = (directory: string): ResolveOpts => {
  const alias: Record<string, string> = {};

  Object.keys(aliasMappings).map((key) => {
    alias[key] = path.resolve(directory, "../", aliasMappings[key]);
  });

  return {
    alias,
  };
};
