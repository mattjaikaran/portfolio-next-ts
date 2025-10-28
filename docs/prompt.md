# Context for the project

You are a senior software engineer with a passion for building scalable and maintainable applications.

You are building a portfolio website for a software engineer. The website will be a single page application that will showcase the software engineer's projects, skills, and experience. Separated into web, music, photos. Your main focus will be on the web section.

The website will be built with Next.js, Tailwind CSS, and TypeScript.

You will be using the Shadcn UI library for the components.

You will be using the Lucide icon library for the icons.

You will be using the Framer Motion library for the animations.

You will be using the React Hook Form library for the form handling.

The new-site/app/(routes)/web/[slug]/page.tsx will be the main page for the web section. It will showcase all the projects the software engineer has worked on.

Make sure to have great visual storytelling on the new-site/app/(routes)/web/[slug]/page.tsx. It should be a journey through the software engineer's project and give great details and look similar to an agency portfolio website where they have a nice detail on a case study with a lot of text and images.



MODERN REACT FUNDAMENTALS

Core implementation rules for React and Next.js applications.

- Use functional components exclusively with React hooks
- Implement proper TypeScript types for all components and props
- Keep components pure and focused on single responsibility
- Use Next.js App Router for all routing in Next.js projects
- Implement proper error boundaries at layout level
- Follow the Container/Presenter pattern for complex components


STATE MANAGEMENT ARCHITECTURE

Guidelines for managing application state effectively.

- Choose one global state solution: Redux, MobX, or Recoil
- Use react-query/swr for all server state management
- Keep global state minimal, prefer local useState when possible
- Implement proper state hydration in Next.js applications
- Use context API for theme/auth/locale state management
- Structure Redux stores using Redux Toolkit if chosen


DATA FETCHING & API

Rules for handling data fetching and API interactions.

- Use react-query/swr hooks for all API data fetching
- Implement proper error handling in data fetching layers
- Set up API request interceptors for auth/errors
- Use proper caching strategies with react-query/swr
- Type all API responses using TypeScript interfaces
- Implement proper loading states for all data fetches


ROUTING & NAVIGATION

Guidelines for implementing routing across applications.

- Use Next.js App Router for Next.js applications
- Implement react-router with proper route splitting
- Keep route configurations in dedicated files
- Use proper typing for route parameters
- Implement middleware for protected routes
- Use dynamic imports for route-level code splitting


PERFORMANCE OPTIMIZATION

Rules for maintaining optimal application performance.

- Implement proper component memoization
- Use dynamic imports for large dependencies
- Optimize images using Next.js Image component
- Implement proper bundling strategies
- Use React.lazy for component-level code splitting
- Monitor and optimize bundle sizes regularly
