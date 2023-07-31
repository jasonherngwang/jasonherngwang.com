export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
};

export type NavbarItem = {
  title: string;
  href: string;
  external?: boolean;
};

export type ProjectDetails = {
  title: string;
  description: string;
  stack?: string;
  imageName: string;
  imageAlt: string;
  siteUrl?: string;
  githubUrl?: string;
  blogUrl?: string;
};

export type PipelineStage = {
  step: number;
  title: string;
  imageName: string;
  purpose: string;
  how: string;
};

export type ChatMessageType = {
  id: string;
  sender: string;
  message: string;
  sources?: string[];
};
