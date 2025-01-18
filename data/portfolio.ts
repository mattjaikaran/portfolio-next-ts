export interface PortfolioItem {
  id: number | string;
  title: string;
  description: string;
  content?: string;
  images?: string[];
  url: string;
  tech?: string[];
  fullTech?: string[];
  details?: string;
  liveLink?: string;
  githubLinks?: Array<{ text: string; link: string }>;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: '6ef08e8a-3c17-4cac-afbb-0e62bfb9e3dc',
    title: 'Rewyre',
    description: 'Enterprise B2B SaaS Platform for Property Management',
    url: '/portfolio/6ef08e8a-3c17-4cac-afbb-0e62bfb9e3dc',
    tech: ['Django', 'Postgres', 'NextJS', 'TypeScript'],
    fullTech: [
      'Django',
      'Postgres',
      'NextJS',
      'React',
      'TypeScript',
      'Redux',
      'RTK Query',
      'SCSS',
      'Vue',
      'Cypress',
      'PyTest',
      'Bash',
    ],
    details:
      'As the lead engineer at Rewyre, I led the development of a sophisticated property management platform through two major iterations. The initial version was architected as a monolithic application using Django 3 and Vue.js, establishing a strong foundation for the product. For version 2.0, I designed and implemented a complete rebuild, transitioning to a more scalable and modern tech stack. This included upgrading to Django 4 for a robust backend API and adopting Next.js with TypeScript for an enhanced frontend experience. The new architecture leverages Redux Toolkit and RTK Query for efficient state management, resulting in improved performance and maintainability. Throughout both versions, I implemented comprehensive testing strategies using Cypress and PyTest to ensure reliability.',
    liveLink: 'https://rewyre.com',
    images: [
      'https://live.staticflickr.com/65535/53517461941_76689aa748_k.jpg',
    ],
  },
  {
    id: '43b58672-e6de-4d6c-ae44-b126c649338b',
    title: 'Fitness Studio Platform',
    description: 'Modern Digital Platform for Fitness Studios',
    url: '/portfolio/43b58672-e6de-4d6c-ae44-b126c649338b',
    tech: ['NextJS', 'SCSS', 'Django', 'Postgres'],
    fullTech: [
      'Django',
      'Postgres',
      'NextJS',
      'React',
      'TypeScript',
      'SCSS',
      'Vue',
      'Cypress',
      'PyTest',
      'Bash',
    ],
    details:
      'Developed an innovative fitness studio platform in collaboration with a NYC-based startup and Madrid-based designer Iria Viejo. The platform features a modern, responsive interface built with Next.js and styled using SCSS for a polished user experience. The backend infrastructure utilizes Django and PostgreSQL, providing a robust API for managing class schedules, member profiles, and booking systems. Key features include real-time class availability, integrated payment processing, and an intuitive admin dashboard for studio management. The project demonstrates the successful integration of design excellence with technical functionality.',
    liveLink: 'https://fitness-client-next.vercel.app/',
    images: [
      'https://live.staticflickr.com/65535/53510981402_332e659430_k.jpg',
    ],
    githubLinks: [
      {
        text: 'Frontend Repository',
        link: 'https://github.com/mattjaikaran/fitness-client-next',
      },
      {
        text: 'Backend Repository',
        link: 'https://github.com/mattjaikaran/fitness-django',
      },
      {
        text: 'Design by Iria Viejo',
        link: 'https://www.iriaviejo.com/',
      },
    ],
  },
  {
    id: '574431f8-1d46-42b7-8b6e-eacb51128bdf',
    title: 'E-Commerce Platform',
    description: 'Full-Stack E-Commerce Solution with Headless CMS',
    url: '/portfolio/574431f8-1d46-42b7-8b6e-eacb51128bdf',
    tech: ['NextJS', 'Redux', 'Django', 'Postgres'],
    fullTech: ['NextJS', 'React', 'Django', 'Postgres', 'NodeJS', 'SCSS'],
    details:
      'Engineered a comprehensive e-commerce solution that showcases modern web development practices. The platform features a Next.js frontend delivering a fast, SEO-friendly shopping experience, while a Django backend handles core business logic and data management. A notable aspect of the architecture is the integration of a Strapi headless CMS, enabling seamless content management and two-way communication with the Django API. The system includes features such as dynamic product catalogs, secure checkout processes, and an intuitive admin interface for inventory management. This project demonstrates the effective combination of multiple technologies to create a scalable, maintainable e-commerce solution.',
    liveLink: 'https://ecommerce-store-nextjs.vercel.app',
    images: [
      'https://live.staticflickr.com/65535/53517773049_7a4bebdc87_h.jpg',
    ],
    githubLinks: [
      {
        text: 'Frontend Repository',
        link: 'https://github.com/mattjaikaran/ecommerce-next',
      },
      {
        text: 'Backend Repository',
        link: 'https://github.com/mattjaikaran/ecommerce-api',
      },
    ],
  },
  {
    id: '3b78ab96-0697-49b7-8c68-c2e1e437fc3e',
    title: 'HyVee Digital Experience',
    description: 'Enterprise E-Commerce and Mobile Development',
    url: '/portfolio/3b78ab96-0697-49b7-8c68-c2e1e437fc3e',
    tech: ['TypeScript', 'React', 'React Native', 'NodeJS'],
    fullTech: [
      'TypeScript',
      'React',
      'React Native',
      'HapiJS/NodeJS',
      'GraphQL/REST APIs',
      'Postgres',
      'Microservices',
      'RTL',
      'Jest',
      'Concourse CI',
      'GCP/Kubernetes',
      'ProdX',
    ],
    details:
      'At HyVee, I contributed to both web and mobile development teams, working within a sophisticated microservices architecture. Operating in a test-driven development environment, I helped maintain and enhance a TypeScript codebase with 100% test coverage. Key responsibilities included developing new features for both web and mobile platforms, optimizing API integrations, and ensuring high performance across all digital touchpoints. The project utilized modern cloud infrastructure with GCP and Kubernetes, demonstrating expertise in enterprise-scale application development and deployment.',
    liveLink: 'https://hyvee.com',
    images: [
      'https://live.staticflickr.com/65535/53517880325_3e8c3d376b_k.jpg',
    ],
  },
  {
    id: '88b3515a-c68e-4a63-b0db-1aa603fe1092',
    title: 'Hubble Contacts',
    description: 'E-Commerce Platform Modernization',
    url: '/portfolio/88b3515a-c68e-4a63-b0db-1aa603fe1092',
    tech: ['React', 'GraphQL', 'Rails', 'Shopify'],
    fullTech: [
      'React',
      'Gatsby',
      'TypeScript',
      'Apollo GraphQL',
      'Rails',
      'Postgres',
      'Shopify',
    ],
    details:
      "Led significant technical improvements at Hubble Contacts, including a major API upgrade from Rails 4 to Rails 6 and the development of a modern frontend using Gatsby and React. A key achievement was creating an interactive customer acquisition quiz using React and TypeScript, which helped streamline the process of matching customers with appropriate contact lens products. The project involved complex integrations between Shopify's e-commerce capabilities and our custom Rails API, resulting in a seamless shopping experience. The modernized platform significantly improved performance metrics and user engagement.",
    liveLink: 'https://hubblecontacts.com',
    images: [
      'https://live.staticflickr.com/65535/53510957077_a71313426c_k.jpg',
    ],
  },
  {
    id: '2a724e2d-6e37-4be7-b68d-07fbb0c9cc9b',
    title: 'Klosers',
    description: 'Advanced Sales Management Platform',
    url: '/portfolio/2a724e2d-6e37-4be7-b68d-07fbb0c9cc9b',
    tech: ['Django', 'Postgres', 'NextJS', 'TypeScript'],
    fullTech: [
      'Django',
      'Postgres',
      'NextJS',
      'React',
      'TypeScript',
      'Redux',
      'RTK Query',
      'SCSS',
      'Vue',
      'Cypress',
      'PyTest',
      'Bash',
    ],
    details:
      'Developed a sophisticated sales platform that combines powerful backend capabilities with an intuitive frontend interface. The application leverages Django and PostgreSQL for robust data management and API functionality, while the frontend utilizes Next.js with TypeScript for a responsive and type-safe user experience. State management is handled efficiently through Redux Toolkit and RTK Query, enabling real-time data updates and seamless user interactions. The platform includes features for sales tracking, performance analytics, and team collaboration, all wrapped in a clean, professional interface built with React Bootstrap.',
    liveLink: 'https://klosers.vercel.app',
    images: [
      'https://live.staticflickr.com/65535/53512305935_0664c0264e_k.jpg',
    ],
  },
];

export const aboutData = `
<p>
I am <strong>Matt Jaikaran</strong>, a software engineer based in New York City with a unique background bridging technology and creative industries.
</p>
<p>
My journey began in Nashville's music industry, where I worked as a touring musician, songwriter, and producer while developing expertise in marketing, branding, and artist management. This experience taught me the value of creativity, attention to detail, and effective collaboration.
</p>
<p>
In 2016, I made a strategic pivot to software engineering, relocating to NYC and immersing myself in technology through an intensive coding bootcamp. Since then, I've built a robust career in full-stack development, working across the entire software lifecycle from design to deployment.
</p>
<p>
I specialize in modern web development using TypeScript/JavaScript and Python, constantly exploring new technologies and methodologies to optimize development workflows. My diverse background allows me to bring both technical expertise and creative problem-solving to every project.
</p>
<p>
I'm always open to discussing new opportunities and collaborations, whether they're innovative software projects or creative technical ventures.
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
    description: `${businessExperience}+ years of business, marketing and branding experience`,
  },
  {
    title: 'Music/Music Production',
    description: `${musicExperience}+ years of music and music production experience`,
  },
];

export interface EducationItem {
  title: string;
  location?: string;
  description: string;
  type?: string;
}

export const educationData = [
  {
    title: 'Belmont University',
    location: 'Nashville, TN',
    description: 'Major: Music Business (Production)',
    type: 'Bachelors of Business Administration',
  },
  {
    title: 'Belmont University',
    location: 'Nashville, TN',
    description: 'Major: Marketing',
    type: 'Bachelors of Business Administration',
  },
  {
    title: 'General Assembly',
    location: 'New York, NY',
    description: 'Software Engineering Bootcamp',
  },
];
