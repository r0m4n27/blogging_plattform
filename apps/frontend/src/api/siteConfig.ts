import { get, patchWithToken, postWithToken } from "@blog/frontend/lib/fetch";

export interface SiteConfig {
  blogTitle: string;
  logo: string;
  icon: string;
}

export type UpdateSiteConfigPayload = Partial<SiteConfig>;

export const getSiteConfig = async () => await get<SiteConfig>("/api/siteConfig");

export const updateSiteConfig = (payload: UpdateSiteConfigPayload) => (token: string) =>
  patchWithToken("/api/siteConfig", token, payload);

export const createSiteConfig = (payload: SiteConfig) => (token: string) =>
  postWithToken("/api/siteConfig", token, payload);
