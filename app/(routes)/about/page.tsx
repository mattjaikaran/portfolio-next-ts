'use client';

import { MainLayout } from '@/components/layouts/main-layout';
import { HeadingH1, HeadingH2 } from '@/components/shared/typography';
import { motion, Variants } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Layout, History, ArrowRight } from 'lucide-react';
import { educationData, experienceData, aboutData } from '@/data/portfolio';
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
  backend: ['Django', 'NodeJS', 'Express', 'FastAPI', 'NestJS', 'PostgreSQL'],
  tools: ['Git', 'Docker', 'AWS', 'GCP', 'Jest', 'CI/CD', 'Bash'],
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
    description: 'Started indie rock band Chapels. Released 1 EP',
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
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>(
    'experience',
  );
  const [viewMode, setViewMode] = useState<'cards' | 'timeline'>('cards');

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Full Stack': 'bg-blue-500/10 text-blue-500',
      Frontend: 'bg-green-500/10 text-green-500',
      Backend: 'bg-purple-500/10 text-purple-500',
      Mobile: 'bg-orange-500/10 text-orange-500',
      DevOps: 'bg-red-500/10 text-red-500',
      Design: 'bg-pink-500/10 text-pink-500',
      education:
        'bg-gradient-to-r from-blue-500/10 to-blue-500/5 text-blue-500 border border-blue-500/20',
      music:
        'bg-gradient-to-r from-purple-500/10 to-purple-500/5 text-purple-500 border border-purple-500/20',
      life: 'bg-gradient-to-r from-amber-500/10 to-amber-500/5 text-amber-500 border border-amber-500/20',
      creative:
        'bg-gradient-to-r from-rose-500/10 to-rose-500/5 text-rose-500 border border-rose-500/20',
      business:
        'bg-gradient-to-r from-green-500/10 to-green-500/5 text-green-500 border border-green-500/20',
    };
    return colors[category] || 'bg-gray-500/10 text-gray-500';
  };

  return (
    <MainLayout>
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container max-w-5xl py-12 mx-auto px-4"
      >
        {/* About Section */}
        <motion.section
          variants={fadeInUp}
          className="space-y-8 text-center mb-16"
        >
          <HeadingH1>About Me</HeadingH1>
          <div
            className="text-muted-foreground text-lg text-left max-w-3xl mx-auto prose dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: aboutData }}
          />
        </motion.section>

        {/* View Toggle */}
        <div className="flex justify-center gap-4 mb-12">
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
          <div className="hidden md:block mb-16">
            <div className="relative">
              {/* Animated timeline line */}
              <motion.div
                className="absolute left-1/2 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
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
                          <Card className="overflow-hidden group hover:shadow-xl hover:border-primary/20 transition-all duration-300 bg-card/80 backdrop-blur-sm">
                            <CardContent className="pt-6">
                              <div className="flex flex-col space-y-4">
                                <Badge
                                  variant="secondary"
                                  className={`${getCategoryColor(
                                    event.category,
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
                                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mt-4 group/link"
                                    >
                                      Learn More
                                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
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
                          <Card className="overflow-hidden group hover:shadow-xl hover:border-primary/20 transition-all duration-300 bg-card/80 backdrop-blur-sm">
                            <CardContent className="pt-6">
                              <div className="flex flex-col space-y-4">
                                <Badge
                                  variant="secondary"
                                  className={`${getCategoryColor(
                                    event.category,
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
                                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mt-4 group/link"
                                    >
                                      Learn More
                                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
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
                      <motion.div
                        className="absolute left-1/2 transform -translate-x-1/2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.2,
                          type: 'spring',
                          stiffness: 200,
                        }}
                      >
                        <div
                          className={`w-4 h-4 rounded-full ${
                            event.link
                              ? 'bg-primary ring-4 ring-primary/20'
                              : 'bg-primary/50'
                          } transition-all duration-300 ${
                            event.link &&
                            'group-hover:ring-primary/40 group-hover:scale-125'
                          }`}
                        />
                        {event.link && (
                          <div className="absolute -inset-2 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Timeline */}
        {viewMode === 'timeline' && (
          <div className="block md:hidden relative space-y-6 mb-16">
            {/* Animated timeline line */}
            <motion.div
              className="absolute left-[1.55rem] top-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative pl-12 pr-4"
              >
                <Card className="group hover:shadow-xl hover:border-primary/20 transition-all duration-300 w-full bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-5">
                    <Badge
                      variant="secondary"
                      className={`${getCategoryColor(event.category)} mb-3`}
                    >
                      {event.year}
                    </Badge>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm">
                      {event.description}
                    </p>
                    {event.link && (
                      <Link
                        href={event.link}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mt-3 text-sm group/link"
                      >
                        Learn More
                        <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    )}
                  </CardContent>
                </Card>

                {/* Timeline Point */}
                <motion.div
                  className="absolute left-[1.55rem] top-6 -translate-x-1/2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                >
                  <div
                    className={`w-3 h-3 rounded-full ${
                      event.link
                        ? 'bg-primary ring-2 ring-primary/20'
                        : 'bg-primary/50'
                    } transition-all duration-300 ${
                      event.link &&
                      'group-hover:ring-primary/40 group-hover:scale-125'
                    }`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Card View */}
        {viewMode === 'cards' && (
          <>
            {/* Skills Section */}
            <motion.section variants={fadeInUp} className="mb-16 space-y-8">
              <HeadingH2 className="text-center">
                Skills & Technologies
              </HeadingH2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-green-500/10">
                        <Layout className="w-6 h-6 text-green-500" />
                      </div>
                      <h3 className="font-semibold text-xl">Frontend</h3>
                      <div className="flex flex-wrap justify-center gap-2">
                        {skills.frontend.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-sm py-1"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-purple-500/10">
                        <Code2 className="w-6 h-6 text-purple-500" />
                      </div>
                      <h3 className="font-semibold text-xl">Backend</h3>
                      <div className="flex flex-wrap justify-center gap-2">
                        {skills.backend.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-sm py-1"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-blue-500/10">
                        <History className="w-6 h-6 text-blue-500" />
                      </div>
                      <h3 className="font-semibold text-xl">Tools & DevOps</h3>
                      <div className="flex flex-wrap justify-center gap-2">
                        {skills.tools.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-sm py-1"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* Experience & Education Section */}
            <motion.section variants={fadeInUp} className="space-y-8">
              <HeadingH2 className="text-center">
                Experience & Education
              </HeadingH2>

              <div className="flex justify-center space-x-4 mb-8">
                <Button
                  variant={activeTab === 'experience' ? 'default' : 'outline'}
                  onClick={() => setActiveTab('experience')}
                  className="min-w-32"
                >
                  Work Experience
                </Button>
                <Button
                  variant={activeTab === 'education' ? 'default' : 'outline'}
                  onClick={() => setActiveTab('education')}
                  className="min-w-32"
                >
                  Education
                </Button>
              </div>

              {activeTab === 'experience' ? (
                <div className="space-y-6">
                  {experienceData.map((job, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex flex-col md:flex-row md:items-center gap-2">
                              <h3 className="text-xl font-semibold">
                                {job.title}
                              </h3>
                              <Badge
                                className={`${getCategoryColor(
                                  job.category,
                                )} w-fit`}
                              >
                                {job.category}
                              </Badge>
                            </div>
                            <div className="text-muted-foreground">
                              <span className="font-medium">{job.company}</span>{' '}
                              • <span>{job.location}</span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {job.period}
                            </div>
                          </div>
                          {job.website && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-fit"
                              asChild
                            >
                              <Link
                                href={job.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                Visit Website
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </Button>
                          )}
                        </div>
                        <div className="mt-4 space-y-2">
                          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                            {job.description.map((desc, i) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>
                          {job.technologies && (
                            <div className="flex flex-wrap gap-2 mt-4">
                              {job.technologies.map((tech, i) => (
                                <Badge key={i} variant="outline">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {educationData.map((edu, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                          <div className="space-y-2">
                            <h3 className="text-xl font-semibold">
                              {edu.degree}
                            </h3>
                            <div className="text-muted-foreground">
                              <span className="font-medium">{edu.school}</span>{' '}
                              • <span>{edu.location}</span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {edu.period}
                            </div>
                          </div>
                          {edu.website && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-fit"
                              asChild
                            >
                              <Link
                                href={edu.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                Visit Website
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </Button>
                          )}
                        </div>
                        {edu.description && (
                          <div className="mt-4">
                            <p className="text-muted-foreground">
                              {edu.description}
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </motion.section>
          </>
        )}

        {/* Brands Section */}
        <motion.section variants={fadeInUp} className="mt-16">
          <Brands />
        </motion.section>
      </motion.div>
    </MainLayout>
  );
}
