import { z } from "zod";
import isBase64 from "validator/lib/isBase64";
import { SiteConfig } from "@prisma/client";

export const siteConfigSchema = z.object({
  blogTitle: z.string(),
  logo: z.string().refine(isBase64),
  icon: z.string().refine(isBase64),
});

export type SiteConfigModel = z.infer<typeof siteConfigSchema>;

export const siteConfigModelFromDb = (config: SiteConfig): SiteConfigModel => ({
  blogTitle: config.blogTitle,
  logo: config.logo.toString("base64"),
  icon: config.icon.toString("base64"),
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
    logo: model.logo ? Buffer.from(model.logo, "base64") : undefined,
    icon: model.icon ? Buffer.from(model.icon, "base64") : undefined,
  };
}
