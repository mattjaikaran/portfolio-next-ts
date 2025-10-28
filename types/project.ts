export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  company?: string;
  date: string;
  tech: string[];
  fullTech: string[];
  images: string[];
  liveLink?: string;
  githubLinks?: {
    text: string;
    link: string;
  }[];
  challenges: {
    title: string;
    description: string;
  }[];
  solutions: {
    title: string;
    description: string;
  }[];
  outcomes: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}
