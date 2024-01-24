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
    fullTech: ['Django', 'Postgres', 'NextJS', 'React', 'TypeScript', 'SCSS', 'Vue', 'Cypress', 'PyTest', 'Bash'],
    details: 'Rewyre is a prop tech startup based in NYC. Version 1.0 was a monolith web app built with Django 3, Postgres, and Vue 2. Version 2.0 was a full rebuild of the back end using Django 4 and Postgres and the front end using NextJS TypeScript and React Bootstrap. I was the lead engineer for version 1.0 and was the architect and sole engineer for version 2.0',
    liveLink: 'https://rewyre.com'
  },
  {
    id: 2,
    title: 'Fitness',
    description: 'Finess App Proof of Concept',
    url: '/portfolio/2',
    tech: ['NextJS', 'Django', 'Postgres'],
    fullTech: ['Django', 'Postgres', 'NextJS', 'React', 'TypeScript', 'SCSS', 'Vue', 'Cypress', 'PyTest', 'Bash'],
    details: 'This was a proof of concept for a fitness studio startup based in NYC. The API was built with Django and Postgres. Front end was built with NextJS and React Bootstrap. Designed by Madrid based art director/designer Iria Viejo.',
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
      {
        text: 'Iria Viejo',
        link: 'https://www.iriaviejo.com/',
      },
    ]
  },
  {
    id: 3,
    title: 'E-Commerce',
    description: 'Fullstack E-Commerce App',
    url: '/portfolio/3',
    tech: ['NextJS', 'Django', 'Postgres'],
    fullTech: ['NextJS', 'React', 'Django', 'Postgres', 'NodeJS', 'SCSS'],
    details: 'Proof of concept e-commerce application. The front end end is built with NextJS/React, the API is built with Django and Postgres. The CMS is built with Strapi/NodeJS and provides two way communication to the Django API.',
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
    fullTech: ['React', 'Gatsby', 'TypeScript', 'Apollo GraphQL', 'Rails', 'Postgres', 'Shopify'],
    details: 'I helped migrate the Rails 4 to Rails 6 API. I built the front end using Gatsby/React and connect it to Shopify and the new Rails API. I also built customer acquisition quiz using React TypeScript to help customers decide different contacts.',
    liveLink: 'https://hubblecontacts.com',
  },
  {
    id: 6,
    title: 'NestJS NextJS App',
    description: 'Fullstack App',
    url: '/portfolio/6',
    tech: ['NestJS', 'Postgres', 'NextJS', 'TypeScript'],
    fullTech: ['NestJS', 'React', 'Postgres', 'NextJS', 'TypeScript', 'Prisma', 'Magic Link'],
    details: 'This is a fullstack app built with NestJS, Postgres, NextJS, and TypeScript. The API is built with NestJS and Postgres. The front end is built with NextJS and TypeScript. The API is protected with Magic Link authentication.',
  },
];
