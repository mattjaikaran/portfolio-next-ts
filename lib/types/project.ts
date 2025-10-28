export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  featured?: boolean;
  techStack: string[];
  company?: string;
  date: string;
} 