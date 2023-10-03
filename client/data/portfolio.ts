export interface PortfolioItems {
  id: number | string;
  title: string;
  description: string;
  content?: string;
  url: string;
  tech?: string[];
  fullTech?: string[];
  details?: string | any;
  liveLink?: string;
  githubLinks?: any;
}

export const portfolioData: PortfolioItems[] = [
  {
    id: 1,
    title: 'Rewyre',
    description: 'B2B SaaS Engineering and Architecture',
    url: '/portfolio/1',
    tech: ['Django', 'Postgres', 'NextJS', 'TypeScript'],
    fullTech: ['Django', 'Postgres', 'NextJS', 'TypeScript', 'SCSS', 'Vue', 'Cypress', 'PyTest', 'Bash'],
    details: 'Rewyre is a prop tech startup based in NYC.',
    liveLink: 'https://rewyre.com'
  },
  {
    id: 2,
    title: 'Fitness',
    description: 'Finess App Proof of Concept',
    url: '/portfolio/2',
    tech: ['NextJS', 'Django', 'Postgres'],
    fullTech: ['Django', 'Postgres', 'NextJS', 'TypeScript', 'SCSS', 'Vue', 'Cypress', 'PyTest', 'Bash'],
    details: 'This was a proof of concept for a fitness studio based in NYC. The API was Django and Postgres. Front end is NextJS using React Bootstrap. The front end was designed by Madrid based art director Iria Viejo.',
    liveLink: 'https://fitness-client-next.vercel.app/',
    githubLinks: [
      {
        text: 'Front End Repo',
        link: 'https://github.com/mattjaikaran/fitness-client-next',
      },
      {
        text: 'Back End Repo',
        link: 'https://github.com/mattjaikaran/fitness-django',
      },
    ]
  },
  {
    id: 3,
    title: 'E-Commerce',
    description: 'Fullstack E-Commerce App',
    url: '/portfolio/3',
    tech: ['NextJS', 'Django', 'Postgres'],
    fullTech: ['NextJS', 'Django', 'Postgres', 'SCSS'],
    details: 'Proof of concept e-commerce application. The front end end is built with NextJS/React, the API is built with Django and Postgres. The CMS is built with Strapi/NodeJS and provides two way communication to the API.',
    liveLink: 'https://ecommerce-store-nextjs.vercel.app',
    githubLinks: [
      {
        text: 'Front End Repo',
        link: 'https://github.com/mattjaikaran/ecommerce-next',
      },
      {
        text: 'Back End Repo',
        link: 'https://github.com/mattjaikaran/ecommerce-api',
      },
      {
        text: 'CMS Repo',
        link: 'https://github.com/mattjaikaran/ecommerce-cms',
      },
    ]
  },
  {
    id: 4,
    title: 'HyVee',
    description: 'Enterprise E-Commerce Development',
    url: '/portfolio/4',
    tech: ['TypeScript', 'React', 'React Native', 'NodeJS'],
    fullTech: ['TypeScript', 'React', 'React Native', 'HapiJS/NodeJS', 'GraphQL/REST APIs', 'Postgres', 'Microservices', 'RTL', 'Bash', 'Jest', 'Concourse CI', 'GCP/Kubernetes', 'ProdX',],
    details: 'At HyVee I worked on Web and Mobile team. I worked within a TDD environment where the codebase was in TypeScript with 100% test coverage.',
    liveLink: 'https://hyvee.com',
  },
  {
    id: 5,
    title: 'Hubble Contacts',
    description: 'B2C Fullstack Shopify Development',
    url: '/portfolio/5',
    tech: ['React', 'GraphQL', 'Rails', 'Shopify'],
    fullTech: ['React', 'Gatsby', 'JavaScript/TypeScript', 'Apollo GraphQL', 'Rails', 'Postgres', 'Shopify'],
    details: 'I helped migrate a Rails 4 to Rails 6 API. I built the front end using Gatsby/React and connect it to Shopify and the new Rails API. I also built another application using React TypeScript that was a dynamic quiz to help customers decide different contacts.',
    liveLink: 'https://hubblecontacts.com',
  },
  {
    id: 6,
    title: 'NestJS NextJS App',
    description: 'Fullstack App',
    url: '/portfolio/6',
    tech: ['NestJS', 'Postgres', 'NextJS', 'TypeScript'],
    fullTech: ['NestJS', 'Postgres', 'NextJS', 'TypeScript', 'Prisma', 'Magic Link'],
  },
];
