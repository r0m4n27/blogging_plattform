import logo from "/logo_sample.png";

export interface SiteConfig {
  blogTitle: string;
  logoUrl: string;
}

const mockSiteConfig: SiteConfig = {
  blogTitle: "My Awesome Blog Title",
  logoUrl: logo,
};

export const fetchSiteConfig = async (): Promise<SiteConfig> => {
  return mockSiteConfig;
};
