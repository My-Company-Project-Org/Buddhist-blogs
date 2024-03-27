export interface SiteConfig {
  siteName: string;
  description: string;
  currentlyAt: string;
  socialLinks: {
    twitter: string;
    youtube: string;
    github: string;
    linkedin: string;
    instagram: string;
  };
}

const siteConfig: SiteConfig = {
  siteName: "Bhwaya",
  description:
    "To help people who understand the reality of life and try to find answers to various problems that occur in practical life, I am publishing this blog article here!",
  currentlyAt: "Testing",
  socialLinks: {
    twitter: "",
    youtube: "",
    github: "",
    linkedin: "",
    instagram: "",
  },
};

export default siteConfig;
