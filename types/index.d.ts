export type SiteConfig = {
  name: string;
  description: string;
  url: string;
};

export type NavbarItem = {
  title: string;
  href: string;
  external?: boolean;
};

export type ProjectDetails = {
  title: string;
  description: string;
  stack: string;
  imageName: string;
  imageAlt: string;
  siteUrl: string;
  githubUrl: string;
  blogUrl?: string;
};
