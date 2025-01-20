'use client';
import { MainLayout } from '@/layouts/MainLayout';
import { HeadingH1, HeadingH2 } from '@/components/shared/typography';
import { motion, Variants } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Code2,
  GraduationCap,
  Clock,
  Layout,
  History,
  ArrowRight,
} from 'lucide-react';
import { aboutData, educationData, experienceData } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Link from 'next/link';
import { Brands } from '@/components/home/brands';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skills = {
  frontend: [
    'React',
    'NextJS',
    'TypeScript',
    'TailwindCSS',
    'Redux',
    'GraphQL',
  ],
  backend: ['NodeJS', 'Express', 'Django', 'FastAPI', 'NestJS', 'PostgreSQL'],
  tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Jest', 'CI/CD', 'Bash'],
};

const timelineEvents = [
  {
    year: '2007-2011',
    title: 'Belmont University',
    description:
      'Double major in Music Business and Marketing. Began music production and artist development journey in Nashville, TN.',
    category: 'education',
  },
  {
    year: '2008-2012',
    title: 'Have You Heard',
    description:
      'Founded the pop rock band Have You Heard. Released several EPs and toured throughout the Southeast, Midwest, and East Coast',
    category: 'music',
    link: '/music/haveyouheard',
  },
  {
    year: '2013',
    title: 'Pocono',
    description: 'Started indie rock band Pocono. Released 1 EP',
    category: 'music',
    link: '/music/pocono',
  },
  {
    year: '2014-2015',
    title: 'Chapels',
    description: 'Started indoe rock band Chapels. Released 1 EP',
    category: 'music',
    link: '/music/chapels',
  },
  {
    year: '2016',
    title: 'Move to NYC',
    description:
      'Relocated to New York City to pursue new opportunities in technology and continue creative endeavors.',
    category: 'life',
  },
  {
    year: '2016',
    title: 'General Assembly',
    description:
      'Completed intensive Software Engineering Bootcamp. Transitioned into tech and web development.',
    category: 'education',
  },
  {
    year: '2016-Present',
    title: 'Various roles as a Software Engineer',
    description:
      'Worked in various roles as a Software Engineer. Completed projects for companies such as Spotify, HyVee, Avon, General Motors, and various startups.',
    category: 'business',
  },
  {
    year: '2025',
    title: 'Creative Renaissance',
    description:
      'Returning to creative pursuits, combining technology expertise with music production and photography.',
    category: 'creative',
  },
];

export default function AboutPage() {
  const [viewMode, setViewMode] = useState<'cards' | 'timeline'>('cards');

  const getCategoryColor = (category: string) => {
    const colors = {
      education:
        'bg-gradient-to-r from-blue-500/10 to-blue-500/5 text-blue-500 border border-blue-500/20',
      music:
        'bg-gradient-to-r from-purple-500/10 to-purple-500/5 text-purple-500 border border-purple-500/20',
      life: 'bg-gradient-to-r from-amber-500/10 to-amber-500/5 text-amber-500 border border-amber-500/20',
      creative:
        'bg-gradient-to-r from-rose-500/10 to-rose-500/5 text-rose-500 border border-rose-500/20',
    };
    return (
      colors[category as keyof typeof colors] ||
      'bg-gradient-to-r from-gray-500/10 to-gray-500/5 text-gray-500 border border-gray-500/20'
    );
  };

  return (
    <MainLayout>
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container max-w-5xl py-12"
      >
        {/* Hero Section */}
        <motion.div variants={fadeInUp} className="space-y-4">
          <HeadingH1 className="text-center mb-8">About Me</HeadingH1>
          <div
            className="text-muted-foreground text-lg max-w-3xl mx-auto prose dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: aboutData }}
          />
        </motion.div>

        {/* View Toggle */}
        <div className="flex justify-center gap-4 my-12">
          <Button
            variant={viewMode === 'cards' ? 'default' : 'outline'}
            size="lg"
            onClick={() => setViewMode('cards')}
            className="gap-2"
          >
            <Layout className="w-5 h-5" />
            Card View
          </Button>
          <Button
            variant={viewMode === 'timeline' ? 'default' : 'outline'}
            size="lg"
            onClick={() => setViewMode('timeline')}
            className="gap-2"
          >
            <History className="w-5 h-5" />
            Timeline
          </Button>
        </div>

        {/* Desktop/Tablet Timeline */}
        {viewMode === 'timeline' && (
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute left-1/2 h-full w-px bg-border" />
              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="relative group"
                  >
                    <div
                      className={`grid grid-cols-2 gap-8 ${
                        index % 2 === 0 ? '' : 'direction-rtl'
                      }`}
                    >
                      <div
                        className={`${
                          index % 2 === 0 ? 'text-right' : 'text-left'
                        }`}
                      >
                        {index % 2 === 0 ? (
                          <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                            <CardContent className="pt-6">
                              <div className="flex flex-col space-y-4">
                                <Badge
                                  variant="secondary"
                                  className={`${getCategoryColor(
                                    event.category
                                  )} ${
                                    index % 2 === 0 ? 'self-end' : 'self-start'
                                  }`}
                                >
                                  {event.year}
                                </Badge>
                                <div>
                                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                    {event.title}
                                  </h3>
                                  <p className="text-muted-foreground mt-2">
                                    {event.description}
                                  </p>
                                  {event.link && (
                                    <Link
                                      href={event.link}
                                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mt-4"
                                    >
                                      Learn More
                                      <ArrowRight className="w-4 h-4" />
                                    </Link>
                                  )}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ) : (
                          <div className="h-full" />
                        )}
                      </div>
                      <div>
                        {index % 2 === 1 ? (
                          <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                            <CardContent className="pt-6">
                              <div className="flex flex-col space-y-4">
                                <Badge
                                  variant="secondary"
                                  className={`${getCategoryColor(
                                    event.category
                                  )} ${
                                    index % 2 === 0 ? 'self-end' : 'self-start'
                                  }`}
                                >
                                  {event.year}
                                </Badge>
                                <div>
                                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                    {event.title}
                                  </h3>
                                  <p className="text-muted-foreground mt-2">
                                    {event.description}
                                  </p>
                                  {event.link && (
                                    <Link
                                      href={event.link}
                                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mt-4"
                                    >
                                      Learn More
                                      <ArrowRight className="w-4 h-4" />
                                    </Link>
                                  )}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ) : (
                          <div className="h-full" />
                        )}
                      </div>

                      {/* Timeline Point */}
                      <div className="absolute left-1/2 transform -translate-x-1/2">
                        <div
                          className={`w-4 h-4 rounded-full ${
                            event.link
                              ? 'bg-primary ring-4 ring-primary/20'
                              : 'bg-primary/50'
                          } transition-all duration-300 ${
                            event.link && 'group-hover:ring-primary/30'
                          }`}
                        />
                        {event.link && (
                          <div className="absolute -inset-2 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Timeline */}
        {viewMode === 'timeline' && (
          <div className="block md:hidden relative space-y-8">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative pl-16 pr-4"
              >
                <Card className="group hover:shadow-lg transition-all duration-300 w-full">
                  <CardContent className="p-6">
                    <Badge
                      variant="secondary"
                      className={`${getCategoryColor(event.category)} mb-4`}
                    >
                      {event.year}
                    </Badge>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 text-base">
                      {event.description}
                    </p>
                    {event.link && (
                      <Link
                        href={event.link}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mt-4"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </CardContent>
                </Card>

                {/* Timeline Point */}
                <div className="absolute left-[1.55rem] top-8 -translate-x-1/2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      event.link
                        ? 'bg-primary ring-4 ring-primary/20'
                        : 'bg-primary/50'
                    } transition-all duration-300 ${
                      event.link && 'group-hover:ring-primary/30'
                    }`}
                  />
                </div>

                {/* Timeline Line */}
                {index !== timelineEvents.length - 1 && (
                  <div className="absolute left-8 top-8 h-full w-px bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Card View */}
        {viewMode === 'cards' && (
          <>
            {/* Skills Section */}
            <motion.div variants={fadeInUp} className="mt-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <HeadingH2>Technical Skills</HeadingH2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.frontend.map(skill => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.backend.map(skill => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Tools & Services
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map(skill => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div variants={fadeInUp} className="mt-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <HeadingH2>Experience</HeadingH2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {experienceData.map((exp, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div variants={fadeInUp} className="mt-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <HeadingH2>Education</HeadingH2>
              </div>

              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {edu.title}
                      </h3>
                      {edu.location && (
                        <p className="text-muted-foreground mt-1">
                          {edu.location}
                        </p>
                      )}
                      <p className="text-muted-foreground mt-2">
                        {edu.description}
                      </p>
                      {edu.type && (
                        <p className="text-sm text-muted-foreground mt-2">
                          {edu.type}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </motion.div>
      <Brands />
    </MainLayout>
  );
}
