import { fetchGet } from "@/lib/fetch";

export interface SiteConfig {
  blogTitle: string;
  logo: string;
  icon: string;
}

export const getSiteConfig = async () =>
  await fetchGet<SiteConfig>("/api/siteConfig");
