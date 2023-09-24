export interface PortfolioItems {
  id: number | string;
  title: string;
  description: string;
  content?: string;
  url: string;
  tech?: string[];
}

export const portfolioData: PortfolioItems[] = [
  {
    id: 1,
    title: 'Rewyre',
    description: 'Fullstack app',
    url: '/portfolio/1',

    tech: ['Django', 'Postgres', 'NextJS', 'TypeScript'],
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'Description 2',
    url: '/portfolio/2',
    tech: ['React', 'NextJS', 'TypeScript'],
  },
  {
    id: 3,
    title: 'Title 3',
    description: 'Description 3',
    url: '/portfolio/3',
    tech: ['Django', 'Postgres', 'SvelteKit'],
  },
  {
    id: 4,
    title: 'Title 4',
    description: 'Description 4',
    url: '/portfolio/4',
    tech: ['NestJS', 'Postgres'],
  },
  {
    id: 5,
    title: 'Title 5',
    description: 'Description 5',
    url: '/portfolio/5',
    tech: ['Golang', 'Postgres'],
  },
  {
    id: 6,
    title: 'Title 6',
    description: 'Description 6',
    url: '/portfolio/6',
    tech: ['Django', 'Postgres', 'NextJS', 'TypeScript'],
  },
];
