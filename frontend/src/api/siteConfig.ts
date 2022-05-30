import { get, patchWithToken, postWithToken } from "@/lib/fetch";

export interface SiteConfig {
  blogTitle: string;
  logo: string;
  icon: string;
}

export type UpdateSiteConfigPayload = Partial<SiteConfig>;

export const getSiteConfig = async () =>
  await get<SiteConfig>("/api/siteConfig");

export const updateSiteConfig = (
  token: string,
  payload: UpdateSiteConfigPayload
) => patchWithToken("/api/siteConfig", token, payload);

export const createSiteConfig = (token: string, payload: SiteConfig) =>
  postWithToken("/api/siteConfig", token, payload);
