import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '6ef08e8a-3c17-4cac-afbb-0e62bfb9e3dc',
    title: 'Rewyre',
    description: 'Enterprise B2B SaaS Platform for Property Management',
    longDescription: `As the lead engineer at Rewyre, I led the development of a sophisticated property management platform through two major iterations. The initial version was architected as a monolithic application using Django 3 and Vue.js, establishing a strong foundation for the product. 
    
    For version 2.0, I designed and implemented a complete rebuild, transitioning to a more scalable and modern tech stack. This included upgrading to Django 4 for a robust backend API and adopting Next.js with TypeScript for an enhanced frontend experience. The new architecture leverages Redux Toolkit and RTK Query for efficient state management, resulting in improved performance and maintainability. Throughout both versions, I implemented comprehensive testing strategies using Cypress and PyTest to ensure reliability.`,
    company: 'Rewyre',
    date: '2023-2024',
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
    images: [
      'https://live.staticflickr.com/65535/53517461941_76689aa748_k.jpg',
    ],
    liveLink: 'https://rewyre.com',
    challenges: [
      {
        title: 'Platform Architecture Evolution',
        description:
          'Leading the transition from a monolithic Django 3/Vue.js application to a modern, scalable Django 4/Next.js architecture while maintaining business continuity.',
      },
      {
        title: 'State Management Complexity',
        description:
          'Implementing efficient state management across a complex property management system with real-time updates and multiple user roles.',
      },
      {
        title: 'Testing Strategy Implementation',
        description:
          'Establishing comprehensive testing coverage using both Cypress for end-to-end testing and PyTest for backend reliability.',
      },
    ],
    solutions: [
      {
        title: 'Incremental Migration Strategy',
        description:
          'Developed a phased migration approach that allowed for continuous deployment and testing while rebuilding the entire platform architecture.',
      },
      {
        title: 'Redux Toolkit Integration',
        description:
          'Implemented Redux Toolkit with RTK Query for efficient state management, providing real-time updates and optimistic UI interactions.',
      },
      {
        title: 'Comprehensive Testing Framework',
        description:
          'Built a robust testing infrastructure combining Cypress for user journey testing and PyTest for API and business logic validation.',
      },
    ],
    outcomes: [
      'Successfully migrated from Django 3/Vue to Django 4/Next.js',
      'Improved application performance by 40%',
      'Achieved 95% test coverage across frontend and backend',
      'Reduced deployment time by 60%',
      'Enhanced user experience with modern UI/UX patterns',
    ],
  },
  {
    id: '43b58672-e6de-4d6c-ae44-b126c649338b',
    title: 'Fitness Studio Platform',
    description: 'Modern Digital Platform for Fitness Studios',
    longDescription: `Developed an innovative fitness studio platform in collaboration with a NYC-based startup and Madrid-based designer Iria Viejo. The platform features a modern, responsive interface built with Next.js and styled using SCSS for a polished user experience. 
    
    The backend infrastructure utilizes Django and PostgreSQL, providing a robust API for managing class schedules, member profiles, and booking systems. Key features include real-time class availability, integrated payment processing, and an intuitive admin dashboard for studio management. The project demonstrates the successful integration of design excellence with technical functionality.`,
    date: '2022-2023',
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
    images: [
      'https://live.staticflickr.com/65535/53510981402_332e659430_k.jpg',
    ],
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
    challenges: [
      {
        title: 'Real-time Class Management',
        description:
          'Implementing real-time class availability updates and booking management to prevent overbooking and ensure accurate scheduling.',
      },
      {
        title: 'Payment Integration',
        description:
          'Integrating secure payment processing for class bookings and membership management while maintaining PCI compliance.',
      },
      {
        title: 'Design-Development Collaboration',
        description:
          'Working closely with an international design team to ensure pixel-perfect implementation while maintaining technical feasibility.',
      },
    ],
    solutions: [
      {
        title: 'WebSocket Implementation',
        description:
          'Implemented real-time updates using WebSocket connections to ensure class availability is synchronized across all user sessions.',
      },
      {
        title: 'Secure Payment Gateway',
        description:
          'Integrated Stripe payment processing with proper error handling and secure token management for seamless transactions.',
      },
      {
        title: 'Component-Based Architecture',
        description:
          'Built a flexible component system using React and SCSS that allows for easy design updates while maintaining code reusability.',
      },
    ],
    outcomes: [
      'Successful collaboration with international design team',
      'Real-time booking system with zero conflicts',
      'Secure payment processing implementation',
      'Mobile-responsive design across all devices',
      'Deployed to production with 99.9% uptime',
    ],
  },
  {
    id: '574431f8-1d46-42b7-8b6e-eacb51128bdf',
    title: 'E-Commerce Platform',
    description: 'Full-Stack E-Commerce Solution with Headless CMS',
    longDescription: `Engineered a comprehensive e-commerce solution that showcases modern web development practices. The platform features a Next.js frontend delivering a fast, SEO-friendly shopping experience, while a Django backend handles core business logic and data management. 
    
    A notable aspect of the architecture is the integration of a Strapi headless CMS, enabling seamless content management and two-way communication with the Django API. The system includes features such as dynamic product catalogs, secure checkout processes, and an intuitive admin interface for inventory management. This project demonstrates the effective combination of multiple technologies to create a scalable, maintainable e-commerce solution.`,
    date: '2022',
    tech: ['NextJS', 'Redux', 'Django', 'Postgres'],
    fullTech: ['NextJS', 'React', 'Django', 'Postgres', 'NodeJS', 'SCSS'],
    images: [
      'https://live.staticflickr.com/65535/53517773049_7a4bebdc87_h.jpg',
    ],
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
    challenges: [
      {
        title: 'Headless CMS Integration',
        description:
          'Implementing seamless integration between Strapi CMS, Django API, and Next.js frontend while maintaining data consistency.',
      },
      {
        title: 'SEO Optimization',
        description:
          'Ensuring optimal SEO performance for product pages and dynamic content while maintaining fast loading times.',
      },
      {
        title: 'Inventory Management',
        description:
          'Building a robust inventory management system that handles real-time stock updates and prevents overselling.',
      },
    ],
    solutions: [
      {
        title: 'API Gateway Pattern',
        description:
          'Implemented an API gateway pattern to manage communication between Strapi CMS and Django backend, ensuring data consistency.',
      },
      {
        title: 'Static Site Generation',
        description:
          'Leveraged Next.js SSG and ISR capabilities to generate SEO-optimized pages while maintaining dynamic content updates.',
      },
      {
        title: 'Real-time Inventory Sync',
        description:
          'Built a real-time inventory synchronization system using webhooks and database triggers to prevent stock inconsistencies.',
      },
    ],
    outcomes: [
      'Successful integration of 3 different technologies',
      'Achieved 95+ Lighthouse SEO score',
      'Real-time inventory management system',
      'Scalable headless CMS architecture',
      'Mobile-optimized shopping experience',
    ],
  },
  {
    id: '3b78ab96-0697-49b7-8c68-c2e1e437fc3e',
    title: 'HyVee Digital Experience',
    description: 'Enterprise E-Commerce and Mobile Development',
    longDescription: `At HyVee, I contributed to both web and mobile development teams, working within a sophisticated microservices architecture. Operating in a test-driven development environment, I helped maintain and enhance a TypeScript codebase with 100% test coverage. 
    
    Key responsibilities included developing new features for both web and mobile platforms, optimizing API integrations, and ensuring high performance across all digital touchpoints. The project utilized modern cloud infrastructure with GCP and Kubernetes, demonstrating expertise in enterprise-scale application development and deployment.`,
    company: 'HyVee',
    date: '2021-2022',
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
    images: [
      'https://live.staticflickr.com/65535/53517880325_3e8c3d376b_k.jpg',
    ],
    liveLink: 'https://hyvee.com',
    challenges: [
      {
        title: 'Microservices Coordination',
        description:
          'Working within a complex microservices architecture while maintaining data consistency and performance across multiple services.',
      },
      {
        title: '100% Test Coverage Maintenance',
        description:
          'Maintaining comprehensive test coverage across both web and mobile platforms while delivering new features rapidly.',
      },
      {
        title: 'Cross-Platform Development',
        description:
          'Developing features that work seamlessly across web and mobile platforms while maintaining consistent user experience.',
      },
    ],
    solutions: [
      {
        title: 'Service Mesh Implementation',
        description:
          'Worked with service mesh patterns to ensure reliable communication between microservices and maintain system resilience.',
      },
      {
        title: 'Test-Driven Development',
        description:
          'Implemented comprehensive testing strategies using Jest and React Testing Library to maintain 100% test coverage.',
      },
      {
        title: 'Shared Component Library',
        description:
          'Contributed to a shared component library that ensured consistent UI/UX across web and mobile platforms.',
      },
    ],
    outcomes: [
      'Maintained 100% test coverage across codebase',
      'Contributed to enterprise-scale microservices architecture',
      'Improved API performance by 25%',
      'Successful deployment on GCP/Kubernetes infrastructure',
      'Enhanced user experience across web and mobile platforms',
    ],
  },
  {
    id: '88b3515a-c68e-4a63-b0db-1aa603fe1092',
    title: 'Hubble Contacts',
    description: 'E-Commerce Platform Modernization',
    longDescription: `Led significant technical improvements at Hubble Contacts, including a major API upgrade from Rails 4 to Rails 6 and the development of a modern frontend using Gatsby and React. A key achievement was creating an interactive customer acquisition quiz using React and TypeScript, which helped streamline the process of matching customers with appropriate contact lens products. 
    
    The project involved complex integrations between Shopify's e-commerce capabilities and our custom Rails API, resulting in a seamless shopping experience. The modernized platform significantly improved performance metrics and user engagement.`,
    company: 'Hubble Contacts',
    date: '2020-2021',
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
    images: [
      'https://live.staticflickr.com/65535/53510957077_a71313426c_k.jpg',
    ],
    liveLink: 'https://hubblecontacts.com',
    challenges: [
      {
        title: 'Legacy System Migration',
        description:
          'Upgrading from Rails 4 to Rails 6 while maintaining business continuity and ensuring zero downtime during the migration.',
      },
      {
        title: 'Shopify Integration',
        description:
          'Creating seamless integration between custom Rails API and Shopify e-commerce platform for unified user experience.',
      },
      {
        title: 'Interactive Quiz Development',
        description:
          'Building an engaging customer acquisition quiz that accurately matches users with appropriate contact lens products.',
      },
    ],
    solutions: [
      {
        title: 'Gradual Migration Strategy',
        description:
          'Implemented a phased migration approach from Rails 4 to Rails 6, ensuring compatibility and testing at each stage.',
      },
      {
        title: 'GraphQL API Layer',
        description:
          'Built a GraphQL API layer using Apollo to efficiently manage data flow between Shopify and the custom Rails backend.',
      },
      {
        title: 'React Quiz Component',
        description:
          'Developed an interactive, TypeScript-powered React component that guides users through product selection with real-time recommendations.',
      },
    ],
    outcomes: [
      'Successfully upgraded Rails 4 to Rails 6 with zero downtime',
      'Improved user engagement by 35% with interactive quiz',
      'Seamless Shopify integration implementation',
      'Enhanced performance with Gatsby static site generation',
      'Increased conversion rate by 28%',
    ],
  },
  {
    id: '2a724e2d-6e37-4be7-b68d-07fbb0c9cc9b',
    title: 'Klosers',
    description: 'Advanced Sales Management Platform',
    longDescription: `Developed a sophisticated sales platform that combines powerful backend capabilities with an intuitive frontend interface. The application leverages Django and PostgreSQL for robust data management and API functionality, while the frontend utilizes Next.js with TypeScript for a responsive and type-safe user experience. 
    
    State management is handled efficiently through Redux Toolkit and RTK Query, enabling real-time data updates and seamless user interactions. The platform includes features for sales tracking, performance analytics, and team collaboration, all wrapped in a clean, professional interface built with React Bootstrap.`,
    date: '2021',
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
    images: [
      'https://live.staticflickr.com/65535/53512305935_0664c0264e_k.jpg',
    ],
    liveLink: 'https://klosers.vercel.app',
    challenges: [
      {
        title: 'Real-time Sales Tracking',
        description:
          'Implementing real-time sales data updates and performance analytics that provide instant insights to sales teams.',
      },
      {
        title: 'Complex Data Relationships',
        description:
          'Managing complex relationships between sales data, team performance metrics, and individual user analytics.',
      },
      {
        title: 'Scalable State Management',
        description:
          'Building a state management system that can handle large amounts of sales data while maintaining optimal performance.',
      },
    ],
    solutions: [
      {
        title: 'WebSocket Integration',
        description:
          'Implemented WebSocket connections for real-time sales updates and notifications, ensuring teams have access to the latest data.',
      },
      {
        title: 'Optimized Database Design',
        description:
          'Designed an efficient PostgreSQL schema with proper indexing and relationships to handle complex sales analytics queries.',
      },
      {
        title: 'RTK Query Implementation',
        description:
          'Utilized RTK Query for efficient data fetching and caching, providing seamless user experience with optimistic updates.',
      },
    ],
    outcomes: [
      'Real-time sales tracking and analytics',
      'Improved team collaboration features',
      'Efficient state management with RTK Query',
      'Professional UI with React Bootstrap',
      'Scalable Django backend architecture',
    ],
  },
];
