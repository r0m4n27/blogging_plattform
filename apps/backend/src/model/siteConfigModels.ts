import { z } from "zod";
import type { SiteConfig } from "@prisma/client";

// Can't check wether logo and icon are correctly encoded
// https://github.com/validatorjs/validator.js/issues/1972
export const siteConfigSchema = z.object({
  blogTitle: z.string(),
  logo: z.string(),
  icon: z.string(),
});

export type SiteConfigModel = z.infer<typeof siteConfigSchema>;

export const siteConfigModelFromDb = (config: SiteConfig): SiteConfigModel => ({
  blogTitle: config.blogTitle,
  logo: config.logo,
  icon: config.icon,
});

export function siteConfigModelToDb(
  model: SiteConfigModel,
): Omit<SiteConfig, "id">;
export function siteConfigModelToDb(
  model: Partial<SiteConfigModel>,
): Partial<Omit<SiteConfig, "id">>;

export function siteConfigModelToDb(model: Partial<SiteConfigModel>) {
  return {
    blogTitle: model.blogTitle,
    logo: model.logo,
    icon: model.icon,
  };
}
