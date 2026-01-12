// Define types for portfolio data
export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  category: string;
  description: string[];
  technologies?: string[];
  website?: string;
}

export interface EducationItem {
  degree: string;
  title?: string; // Alias for degree
  school: string;
  location: string;
  period: string;
  description?: string;
  type?: string;
  website?: string;
}

export interface Challenge {
  title: string;
  description: string;
}

export interface WebProject {
  id?: string; // Alias for slug
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[]; // Array of images
  tags: string[];
  tech?: string[]; // Alias for technologies
  technologies: string[];
  year: string;
  role: string;
  client?: string;
  liveUrl?: string;
  liveLink?: string; // Alias for liveUrl
  githubUrl?: string;
  githubLinks?: Array<{ text: string; link: string }>; // Array of github links
  features?: string[];
  challenges?: Challenge[];
}

// About data - ported from portfolio-next-ts
export const aboutData = `
<p>
I am <strong>Matt Jaikaran</strong>, a software engineer based in New York City with a unique background bridging technology and creative industries.
</p>
<p>
My journey began in Nashville's music industry, where I worked as a touring musician, songwriter, and producer while developing expertise in marketing, branding, and artist management. This experience taught me the value of creativity, attention to detail, and effective collaboration.
</p>
<p>
In 2016, I made a strategic pivot to software engineering, relocating to NYC and immersing myself in technology through a coding bootcamp and continuous self-learning. Since then, I've built a robust career in full-stack development, working across the entire software lifecycle from design to deployment.
</p>
<p>
I specialize in modern web development using mostly JavaScript/TypeScript and Python, with a focus on React and Next.js for the frontend and Django/FastAPI for the backend. I'm constantly exploring new technologies and methodologies to optimize development workflows. My diverse background allows me to bring both technical expertise and creative problem-solving to every project.
</p>
<p>
I'm always open to discussing new opportunities and collaborations, whether they're innovative software projects or creative technical ventures.
</p>
`;

// Legacy format for backward compatibility
export const aboutDataLegacy = {
  bio: `I'm a Full Stack Software Engineer based in New York City with over 7 years of professional experience building web applications.`,
  longBio: `My journey began in the music industry, where I worked in production and artist management before transitioning to tech. This unique background gives me a creative approach to problem-solving and user experience design.`,
  hobbies: `When I'm not coding, you can find me producing music, taking photos, or exploring NYC's food scene.`,
};

// Experience data - ported from portfolio-next-ts
const date = new Date();
const currentYear = date.getFullYear();
const softwareExperience = currentYear - 2016;
const eCommExperience = currentYear - 2009;
const businessExperience = currentYear - 2008;
const musicExperience = currentYear - 2002;

export const experienceData: ExperienceItem[] = [
  {
    title: 'Software Engineering',
    company: 'Various Companies',
    location: 'New York, NY',
    period: '2016 - Present',
    category: 'Full Stack',
    description: [
      `${softwareExperience}+ years of software engineering experience`,
      'Worked with companies such as Spotify, HyVee, Avon, General Motors, and various startups',
      'Full-stack development using modern technologies and best practices',
    ],
    technologies: [
      'React',
      'NextJS',
      'TypeScript',
      'Django',
      'Node.js',
      'PostgreSQL',
      'AWS',
      'GCP',
    ],
  },
  {
    title: 'E-Commerce',
    company: 'Various Clients',
    location: 'Remote',
    period: '2009 - Present',
    category: 'E-Commerce',
    description: [
      `${eCommExperience}+ years of e-commerce experience`,
      'Built and maintained e-commerce platforms and solutions',
      'Experience with payment processing, inventory management, and customer experience optimization',
    ],
    technologies: [
      'Shopify',
      'Stripe',
      'PayPal',
      'WooCommerce',
      'Magento',
      'Custom Solutions',
    ],
  },
  {
    title: 'Business/Marketing/Branding',
    company: 'Music Industry & Startups',
    location: 'Nashville, TN / New York, NY',
    period: '2008 - Present',
    category: 'Business',
    description: [
      `${businessExperience}+ years of business, marketing and branding experience`,
      'Artist management, marketing campaigns, and brand development',
      'Strategic planning and business development for creative and tech projects',
    ],
    technologies: [
      'Digital Marketing',
      'Brand Strategy',
      'Project Management',
      'Analytics',
    ],
  },
  {
    title: 'Music/Music Production',
    company: 'Various Bands & Solo Projects',
    location: 'Nashville, TN / New York, NY',
    period: '2002 - Present',
    category: 'Creative',
    description: [
      `${musicExperience}+ years of music and music production experience`,
      'Touring musician, songwriter, and producer',
      'Released multiple albums and EPs with various bands',
    ],
    technologies: [
      'Pro Tools',
      'Logic Pro',
      'Ableton Live',
      'Audio Engineering',
      'Songwriting',
    ],
  },
];

// Education data - ported from portfolio-next-ts
export const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Business Administration - Music Business',
    title: 'Bachelor of Business Administration - Music Business',
    school: 'Belmont University',
    location: 'Nashville, TN',
    period: '2007 - 2011',
    description: 'Major: Music Business (Production)',
    type: 'Bachelors of Business Administration',
  },
  {
    degree: 'Bachelor of Business Administration - Marketing',
    title: 'Bachelor of Business Administration - Marketing',
    school: 'Belmont University',
    location: 'Nashville, TN',
    period: '2007 - 2011',
    description: 'Major: Marketing',
    type: 'Bachelors of Business Administration',
  },
  {
    degree: 'Software Engineering Bootcamp',
    title: 'Software Engineering Bootcamp',
    school: 'General Assembly',
    location: 'New York, NY',
    period: '2016',
    description: 'Software Engineering Bootcamp',
  },
];

// Web projects data - ported from portfolio-next-ts
export const webProjects: WebProject[] = [
  {
    id: '6ef08e8a-3c17-4cac-afbb-0e62bfb9e3dc',
    title: 'Rewyre',
    slug: 'rewyre',
    description: 'Enterprise B2B SaaS Platform for Property Management',
    longDescription:
      'As the lead engineer at Rewyre, I led the development of a sophisticated property management platform through two major iterations. The initial version was architected as a monolithic application using Django 3 and Vue.js, establishing a strong foundation for the product. For version 2.0, I designed and implemented a complete rebuild, transitioning to a more scalable and modern tech stack. This included upgrading to Django 4 for a robust backend API and adopting Next.js with TypeScript for an enhanced frontend experience. The new architecture leverages Redux Toolkit and RTK Query for efficient state management, resulting in improved performance and maintainability. Throughout both versions, I implemented comprehensive testing strategies using Cypress and PyTest to ensure reliability.',
    image: 'https://live.staticflickr.com/65535/53517461941_76689aa748_k.jpg',
    images: [
      'https://live.staticflickr.com/65535/53517461941_76689aa748_k.jpg',
    ],
    tags: ['Enterprise', 'SaaS', 'Property Management'],
    technologies: [
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
    tech: ['Django', 'Postgres', 'NextJS', 'TypeScript'],
    year: '2021-2023',
    role: 'Founding Engineer',
    liveUrl: 'https://rewyre.com',
    liveLink: 'https://rewyre.com',
    githubLinks: [],
  },
  {
    id: '43b58672-e6de-4d6c-ae44-b126c649338b',
    title: 'Fitness Studio Platform',
    slug: 'fitness-studio-platform',
    description: 'Modern Digital Platform for Fitness Studios',
    longDescription:
      'Developed an innovative fitness studio platform in collaboration with a NYC-based startup and Madrid-based designer Iria Viejo. The platform features a modern, responsive interface built with Next.js and styled using SCSS for a polished user experience. The backend infrastructure utilizes Django and PostgreSQL, providing a robust API for managing class schedules, member profiles, and booking systems. Key features include real-time class availability, integrated payment processing, and an intuitive admin dashboard for studio management. The project demonstrates the successful integration of design excellence with technical functionality.',
    image: 'https://live.staticflickr.com/65535/53510981402_332e659430_k.jpg',
    images: [
      'https://live.staticflickr.com/65535/53510981402_332e659430_k.jpg',
    ],
    tags: ['Fitness', 'Booking', 'SaaS'],
    technologies: [
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
    tech: ['NextJS', 'SCSS', 'Django', 'Postgres'],
    year: '2022',
    role: 'Full Stack Developer',
    liveUrl: 'https://fitness-client-next.vercel.app/',
    liveLink: 'https://fitness-client-next.vercel.app/',
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
    slug: 'ecommerce-platform',
    description: 'Full-Stack E-Commerce Solution with Headless CMS',
    longDescription:
      'Engineered a comprehensive e-commerce solution that showcases modern web development practices. The platform features a Next.js frontend delivering a fast, SEO-friendly shopping experience, while a Django backend handles core business logic and data management. A notable aspect of the architecture is the integration of a Strapi headless CMS, enabling seamless content management and two-way communication with the Django API. The system includes features such as dynamic product catalogs, secure checkout processes, and an intuitive admin interface for inventory management. This project demonstrates the effective combination of multiple technologies to create a scalable, maintainable e-commerce solution.',
    image: 'https://live.staticflickr.com/65535/53517773049_7a4bebdc87_h.jpg',
    images: [
      'https://live.staticflickr.com/65535/53517773049_7a4bebdc87_h.jpg',
    ],
    tags: ['E-Commerce', 'CMS', 'Full Stack'],
    technologies: ['NextJS', 'React', 'Django', 'Postgres', 'NodeJS', 'SCSS'],
    tech: ['NextJS', 'Redux', 'Django', 'Postgres'],
    year: '2021',
    role: 'Full Stack Developer',
    liveUrl: 'https://ecommerce-store-nextjs.vercel.app',
    liveLink: 'https://ecommerce-store-nextjs.vercel.app',
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
    slug: 'hyvee-digital-experience',
    description: 'Enterprise E-Commerce and Mobile Development',
    longDescription:
      'At HyVee, I contributed to both web and mobile development teams, working within a sophisticated microservices architecture. Operating in a test-driven development environment, I helped maintain and enhance a TypeScript codebase with 100% test coverage. Key responsibilities included developing new features for both web and mobile platforms, optimizing API integrations, and ensuring high performance across all digital touchpoints. The project utilized modern cloud infrastructure with GCP and Kubernetes, demonstrating expertise in enterprise-scale application development and deployment.',
    image: 'https://live.staticflickr.com/65535/53517880325_3e8c3d376b_k.jpg',
    images: [
      'https://live.staticflickr.com/65535/53517880325_3e8c3d376b_k.jpg',
    ],
    tags: ['Enterprise', 'E-Commerce', 'Mobile'],
    technologies: [
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
    tech: ['TypeScript', 'React', 'React Native', 'NodeJS'],
    year: '2020',
    role: 'Software Engineer',
    liveUrl: 'https://hyvee.com',
    liveLink: 'https://hyvee.com',
    githubLinks: [],
  },
  {
    id: '88b3515a-c68e-4a63-b0db-1aa603fe1092',
    title: 'Hubble Contacts',
    slug: 'hubble-contacts',
    description: 'E-Commerce Platform Modernization',
    longDescription:
      "Led significant technical improvements at Hubble Contacts, including a major API upgrade from Rails 4 to Rails 6 and the development of a modern frontend using Gatsby and React. A key achievement was creating an interactive customer acquisition quiz using React and TypeScript, which helped streamline the process of matching customers with appropriate contact lens products. The project involved complex integrations between Shopify's e-commerce capabilities and our custom Rails API, resulting in a seamless shopping experience. The modernized platform significantly improved performance metrics and user engagement.",
    image: 'https://live.staticflickr.com/65535/53510957077_a71313426c_k.jpg',
    images: [
      'https://live.staticflickr.com/65535/53510957077_a71313426c_k.jpg',
    ],
    tags: ['E-Commerce', 'Modernization', 'Rails'],
    technologies: [
      'React',
      'Gatsby',
      'TypeScript',
      'Apollo GraphQL',
      'Rails',
      'Postgres',
      'Shopify',
    ],
    tech: ['React', 'GraphQL', 'Rails', 'Shopify'],
    year: '2019',
    role: 'Frontend Engineer',
    liveUrl: 'https://hubblecontacts.com',
    liveLink: 'https://hubblecontacts.com',
    githubLinks: [],
  },
  {
    id: '2a724e2d-6e37-4be7-b68d-07fbb0c9cc9b',
    title: 'Klosers',
    slug: 'klosers',
    description: 'Advanced Sales Management Platform',
    longDescription:
      'Developed a sophisticated sales platform that combines powerful backend capabilities with an intuitive frontend interface. The application leverages Django and PostgreSQL for robust data management and API functionality, while the frontend utilizes Next.js with TypeScript for a responsive and type-safe user experience. State management is handled efficiently through Redux Toolkit and RTK Query, enabling real-time data updates and seamless user interactions. The platform includes features for sales tracking, performance analytics, and team collaboration, all wrapped in a clean, professional interface built with React Bootstrap.',
    image: 'https://live.staticflickr.com/65535/53512305935_0664c0264e_k.jpg',
    images: [
      'https://live.staticflickr.com/65535/53512305935_0664c0264e_k.jpg',
    ],
    tags: ['Sales', 'CRM', 'Analytics'],
    technologies: [
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
    tech: ['Django', 'Postgres', 'NextJS', 'TypeScript'],
    year: '2020',
    role: 'Full Stack Developer',
    liveUrl: 'https://klosers.vercel.app',
    liveLink: 'https://klosers.vercel.app',
    githubLinks: [],
  },
];

// Alias for backward compatibility
export const portfolioData = webProjects;
