export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Matt Jaikaran',
  description: 'Software Engineer based in NYC',
  mainNav: [
    {
      title: 'Web',
      href: '/web',
    },
    {
      title: 'Music',
      href: '/music',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
    // {
    //   title: 'Photos',
    //   href: '/photos',
    // },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Now',
      href: '/now',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ],
  links: {
    instagram: 'https://instagram.com/mattjaikaran',
    linkedin: 'https://linkedin.com/in/mattjaikaran',
    github: 'https://github.com/mattjaikaran',
  },
};
