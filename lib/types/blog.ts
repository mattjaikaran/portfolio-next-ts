export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  tags: string[];
  coverImage?: string;
  published: boolean;
}

export interface BlogAuthor {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface CreateBlogPostInput {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  coverImage?: string;
  published?: boolean;
}

export interface UpdateBlogPostInput {
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  tags?: string[];
  coverImage?: string;
  published?: boolean;
}
