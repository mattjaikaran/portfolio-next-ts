export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Matt Jaikaran',
  description: 'Software Engineer based in NYC',
  mainNav: [
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Portfolio',
      href: '/portfolio',
    },
    // {
    //   title: 'Music',
    //   href: '/music',
    // },
    // {
    //   title: 'Photos',
    //   href: '/photos',
    // },
    {
      title: 'Contact',
      href: '/contact',
    },
    // {
    //   title: 'Blog',
    //   href: '/blog',
    // },
  ],
  links: {
    instagram: 'https://instagram.com/mattjaikaran',
    linkedin: 'https://linkedin.com/in/mattjaikaran',
    github: 'https://github.com/mattjaikaran',
  },
};
