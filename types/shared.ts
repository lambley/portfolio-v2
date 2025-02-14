type BaseMetadata = {
  id: number;
  title: string;
  description: string;
  image: string;
  created_at: string;
  category: string[];
  slug: string;
};

export type Blog = BaseMetadata & {
  status: string;
};

export type Project = BaseMetadata & {
  url: string;
  repo_url: string;
};
