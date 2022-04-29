export interface SiteConfig {
  blogTitle: string;
  logoUrl: string;
  iconUrl: string;
}

const mockSiteConfig: SiteConfig = {
  blogTitle: "My Awesome Blog Title",
  logoUrl: "/logo_sample.png",
  iconUrl: "/icon_sample.ico",
};

export const fetchSiteConfig = async (): Promise<SiteConfig> => {
  return mockSiteConfig;
};
