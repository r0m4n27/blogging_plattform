import type { Options } from "tsup";

export const defaultOptions: Options = {
  clean: true,
  sourcemap: true,
  minify: true,
  metafile: true,
  dts: true,
};
