export interface PortfolioItem {
  id: number | string;
  title: string;
  description: string;
  content?: string;
  images?: string[];
  url: string;
  tech?: string[];
  fullTech?: string[];
  details?: string | any;
  liveLink?: string;
  githubLinks?: any;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: '6ef08e8a-3c17-4cac-afbb-0e62bfb9e3dc',
    title: 'Rewyre',
    description: 'B2B SaaS Engineering and Architecture',
    url: '/portfolio/6ef08e8a-3c17-4cac-afbb-0e62bfb9e3dc',
    tech: ['Django', 'Postgres', 'NextJS', 'TypeScript'],
    fullTech: ['Django', 'Postgres', 'NextJS', 'React', 'TypeScript', 'Redux', 'RTK Query', 'SCSS', 'Vue', 'Cypress', 'PyTest', 'Bash'],
    details: 'Rewyre is a prop tech startup based in NYC. Version 1.0 was a monolith web app built with Django 3, Postgres, and Vue 2. Version 2.0 was a full rebuild of the back end using Django 4 and Postgres and the front end using NextJS TypeScript, Redux Toolkit/RTK Query to manage state, and React Bootstrap UI library. I was the lead engineer for version 1.0 and was the architect and sole engineer for version 2.0',
    liveLink: 'https://rewyre.com',
    images: ['https://live.staticflickr.com/65535/53206588558_cfee562928_k.jpg']
  },
  {
    id: '43b58672-e6de-4d6c-ae44-b126c649338b',
    title: 'Fitness',
    description: 'Finess App Proof of Concept',
    url: '/portfolio/43b58672-e6de-4d6c-ae44-b126c649338b',
    tech: ['NextJS', 'Django', 'Postgres'],
    fullTech: ['Django', 'Postgres', 'NextJS', 'React', 'TypeScript', 'SCSS', 'Vue', 'Cypress', 'PyTest', 'Bash'],
    details: 'This was a proof of concept for a fitness studio startup based in NYC. The API was built with Django and Postgres. Front end was built with NextJS and React Bootstrap. Designed by Madrid based art director/designer Iria Viejo.',
    liveLink: 'https://fitness-client-next.vercel.app/',
    images: ['https://live.staticflickr.com/65535/53510981402_332e659430_k.jpg'],
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
    id: '574431f8-1d46-42b7-8b6e-eacb51128bdf',
    title: 'E-Commerce',
    description: 'Fullstack E-Commerce App',
    url: '/portfolio/574431f8-1d46-42b7-8b6e-eacb51128bdf',
    tech: ['NextJS', 'Django', 'Postgres'],
    fullTech: ['NextJS', 'React', 'Django', 'Postgres', 'NodeJS', 'SCSS'],
    details: 'Proof of concept e-commerce application. The front end end is built with NextJS/React, the API is built with Django and Postgres. The CMS is built with Strapi/NodeJS and provides two way communication to the Django API.',
    liveLink: 'https://ecommerce-store-nextjs.vercel.app',
    images: ['https://live.staticflickr.com/65535/53511874811_546bf739b2_k.jpg'],
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
    id: '3b78ab96-0697-49b7-8c68-c2e1e437fc3e',
    title: 'HyVee',
    description: 'Enterprise E-Commerce Development',
    url: '/portfolio/3b78ab96-0697-49b7-8c68-c2e1e437fc3e',
    tech: ['TypeScript', 'React', 'React Native', 'NodeJS'],
    fullTech: ['TypeScript', 'React', 'React Native', 'HapiJS/NodeJS', 'GraphQL/REST APIs', 'Postgres', 'Microservices', 'RTL', 'Bash', 'Jest', 'Concourse CI', 'GCP/Kubernetes', 'ProdX',],
    details: 'At HyVee I worked on Web and Mobile team. I worked within a TDD environment where the codebase was in TypeScript with 100% test coverage.',
    liveLink: 'https://hyvee.com',
  },
  {
    id: '88b3515a-c68e-4a63-b0db-1aa603fe1092',
    title: 'Hubble Contacts',
    description: 'B2C Fullstack Shopify Development',
    url: '/portfolio/88b3515a-c68e-4a63-b0db-1aa603fe1092',
    tech: ['React', 'GraphQL', 'Rails', 'Shopify'],
    fullTech: ['React', 'Gatsby', 'TypeScript', 'Apollo GraphQL', 'Rails', 'Postgres', 'Shopify'],
    details: 'I helped migrate the Rails 4 to Rails 6 API. I built the front end using Gatsby/React and connect it to Shopify and the new Rails API. I also built customer acquisition quiz using React TypeScript to help customers decide different contacts.',
    liveLink: 'https://hubblecontacts.com',
    images: ['https://live.staticflickr.com/65535/53510957077_a71313426c_k.jpg']
  },
  {
    id: '2a724e2d-6e37-4be7-b68d-07fbb0c9cc9b',
    title: 'Klosers',
    description: 'Sales Startup Platform',
    url: '/portfolio/2a724e2d-6e37-4be7-b68d-07fbb0c9cc9b',
    tech: ['Django', 'Postgres', 'NextJS', 'TypeScript'],
    fullTech: ['Django', 'Postgres', 'NextJS', 'React', 'TypeScript', 'Redux', 'RTK Query', 'SCSS', 'Vue', 'Cypress', 'PyTest', 'Bash'],
    details: 'A sales platform built with Django, Postgres, NextJS, Redux, and TypeScript. The API is built with Django and Postgres. The front end is built with NextJS and TypeScript, Redux Toolkit/RTK Query to manage state, React Bootstrap UI library.',
    liveLink: 'https://klosers.vercel.app',
    images: ['https://live.staticflickr.com/65535/53512305935_0664c0264e_k.jpg'],
  },
  // {
  //   id: '9f8b8125-a202-427e-9329-d1f0cd52ecac',
  //   title: 'NestJS NextJS App',
  //   description: 'Fullstack App',
  //   url: '/portfolio/9f8b8125-a202-427e-9329-d1f0cd52ecac',
  //   tech: ['NestJS', 'Postgres', 'NextJS', 'TypeScript'],
  //   fullTech: ['NestJS', 'React', 'Postgres', 'NextJS', 'TypeScript', 'Prisma', 'Magic Link'],
  //   details: 'This is a fullstack app built with NestJS, Postgres, NextJS, and TypeScript. The API is built with NestJS and Postgres. The front end is built with NextJS and TypeScript. The API is protected with Magic Link authentication.',
  // },
];


export const aboutData = `<p>
Former touring musician/songwriter/producer turned software engineer.
I've had an unconventional career path transitioning from the music
industry specializing in marketing/branding, launching brands, and
artist management while living in Nashville.
</p>
<p>
Upon moving to NYC 2016, I attended a bootcamp and have gained tons
of relevant experience and knowledge of the full software
development/product lifecycle. Most of my engineering experience has
been within startups, helping SaaS companies launch their product.
</p>
<p>
The majority of my experience lies within JavaScript/TypeScript and Python
languages using various frameworks but I am continuously learning and
researching for more optimal solutions to my workflow. I also enjoy
Bash scripting and building CLIs to speed up development.
</p>
<p>
I am open to working on new projects of any size.
</p>
`;


const date = new Date();
const currentYear = date.getFullYear();
const softwareExperience = currentYear - 2016;
const eCommExperience = currentYear - 2009;
const businessExperience = currentYear - 2008;
const musicExperience = currentYear - 2002;

export interface ExperienceItem {
  title: string;
  description: string;
}

export const experienceData: ExperienceItem[] = [
  {
    title: 'Software Engineering',
    description: `${softwareExperience}+ years of software engineering`,
  },
  {
    title: 'E-Commerce',
    description: `${eCommExperience}+ years of e-commerce experience`,
  },
  {
    title: 'Business/Marketing/Branding',
    description: `${businessExperience}+ years of business/marketing/branding experience`,
  },
  {
    title: 'Music/Music Production',
    description: `${musicExperience}+ years of music/music production experience`,
  }
]

export interface EducationItem {
  title: string;
  description: string;
  type?: string;
}

export const educationData = [
  {
    title: 'Belmont University',
    description: 'Major: Music Business (Production)',
    type: 'Bachelors of Business Administration'
  },
  {
    title: 'Belmont University',
    description: 'Major: Marketing',
    type: 'Bachelors of Business Administration'
  },
  {
    title: 'General Assembly',
    description: 'Software Engineering Bootcamp',
  }
]

