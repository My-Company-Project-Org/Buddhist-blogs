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
    "A minimal and lovely travel blog which shares experiences and citiest around the world!",
  currentlyAt: "Budapest",
  socialLinks: {
    twitter: "",
    youtube: "",
    github: "",
    linkedin: "",
    instagram: "",
  },
};

export default siteConfig;
