import logo from "@/static/logo_sample.png";

export interface SiteConfig {
  blogTitle: string;
  logoUrl: string;
}

export const mockSiteConfig: SiteConfig = {
  blogTitle: "My Awesome Blog Title",
  logoUrl: logo,
};
