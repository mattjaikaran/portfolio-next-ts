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
    // {
    //   title: 'Photos',
    //   href: '/photos',
    // },
    {
      title: 'About',
      href: '/about',
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
