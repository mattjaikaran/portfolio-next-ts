'use client';

import { MainLayout } from '@/components/layouts/main-layout';
import { HeadingH1, HeadingH2 } from '@/components/shared/typography';
import { motion, Variants } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  BarChart3,
  Users,
  Eye,
  Globe,
  TrendingUp,
  ExternalLink,
  Github,
  FileText,
  Briefcase,
} from 'lucide-react';
import Link from 'next/link';

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

const siteStats = [
  {
    label: 'Web Projects',
    value: '6',
    icon: Briefcase,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    href: '/web',
  },
  {
    label: 'Blog Posts',
    value: '4',
    icon: FileText,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    href: '/blog',
  },
  {
    label: 'Music Projects',
    value: '4',
    icon: TrendingUp,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    href: '/music',
  },
  {
    label: 'GitHub Repos',
    value: '50+',
    icon: Github,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    href: 'https://github.com/mattjaikaran',
  },
];

const techStack = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  backend: ['Django', 'Node.js', 'PostgreSQL', 'Redis'],
  tools: ['Git', 'Docker', 'AWS', 'Vercel'],
};

export function StatsPageClient() {
  return (
    <MainLayout>
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container max-w-5xl py-12 mx-auto px-4"
      >
        <motion.div variants={fadeInUp} className="text-center space-y-4 mb-12">
          <HeadingH1>Site Stats</HeadingH1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Public analytics and statistics for this portfolio site. Practicing
            transparency and open metrics.
          </p>
        </motion.div>

        {/* Site Content Stats */}
        <motion.div variants={fadeInUp} className="mb-12">
          <HeadingH2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            Site Content
          </HeadingH2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {siteStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={stat.href}
                  target={stat.href.startsWith('http') ? '_blank' : undefined}
                >
                  <Card className="hover:border-primary/30 hover:shadow-md transition-all cursor-pointer h-full">
                    <CardContent className="pt-6 text-center">
                      <div
                        className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}
                      >
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div className="text-3xl font-bold mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Analytics Note */}
        <motion.div variants={fadeInUp} className="mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">
                      Privacy-Focused Analytics
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    This site uses self-hosted Plausible Analytics - a
                    privacy-focused, open-source alternative to Google
                    Analytics. No cookies, no tracking, no personal data
                    collected.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">No Cookies</Badge>
                    <Badge variant="outline">GDPR Compliant</Badge>
                    <Badge variant="outline">Open Source</Badge>
                    <Badge variant="outline">Self-Hosted</Badge>
                  </div>
                </div>
                <div>
                  <Button variant="outline" asChild>
                    <a
                      href="https://plausible.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn about Plausible
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tech Stack Used */}
        <motion.div variants={fadeInUp} className="mb-12">
          <HeadingH2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" />
            Built With
          </HeadingH2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([category, technologies]) => (
              <Card key={category}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold capitalize mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Open Source */}
        <motion.div variants={fadeInUp}>
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="pt-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Open Source</h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                This portfolio is open source. Feel free to explore the code,
                learn from it, or use it as inspiration for your own projects.
              </p>
              <Button asChild>
                <a
                  href="https://github.com/mattjaikaran/portfolio-next-ts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 w-4 h-4" />
                  View Source on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
}
