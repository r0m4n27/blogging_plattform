import { fetchGet } from "@/lib/fetch";

export interface SiteConfig {
  blogTitle: string;
  logo: string;
  icon: string;
}

export const getSiteConfig = async () => fetchGet<SiteConfig>("api/siteConfig");
