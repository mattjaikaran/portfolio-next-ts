export function PersonJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Matt Jaikaran',
    url: 'https://mattjaikaran.com',
    image: 'https://live.staticflickr.com/65535/54271233492_70f7d41d9d_h.jpg',
    sameAs: [
      'https://github.com/mattjaikaran',
      'https://linkedin.com/in/mattjaikaran',
      'https://instagram.com/mattjaikaran',
    ],
    jobTitle: 'Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Self-Employed',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New York',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Belmont University',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'General Assembly',
      },
    ],
    knowsAbout: [
      'Web Development',
      'React',
      'Next.js',
      'TypeScript',
      'Python',
      'Django',
      'Node.js',
      'Software Engineering',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Matt Jaikaran | Software Engineer',
    description:
      'Full Stack Software Engineer based in NYC, specializing in modern web development, music production, and photography.',
    url: 'https://mattjaikaran.com',
    author: {
      '@type': 'Person',
      name: 'Matt Jaikaran',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://mattjaikaran.com/web?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  author: string;
  image?: string;
}

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  author,
  image,
}: ArticleJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    author: {
      '@type': 'Person',
      name: author,
      url: 'https://mattjaikaran.com',
    },
    publisher: {
      '@type': 'Person',
      name: 'Matt Jaikaran',
      url: 'https://mattjaikaran.com',
    },
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image,
      },
    }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface ProjectJsonLdProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  technologies: string[];
}

export function ProjectJsonLd({
  name,
  description,
  url,
  image,
  technologies,
}: ProjectJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: name,
    description: description,
    url: url,
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web',
    author: {
      '@type': 'Person',
      name: 'Matt Jaikaran',
      url: 'https://mattjaikaran.com',
    },
    ...(image && {
      image: image,
    }),
    keywords: technologies.join(', '),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
