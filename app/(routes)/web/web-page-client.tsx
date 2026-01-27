'use client';

import { useState, useMemo } from 'react';
import { MainLayout } from '@/components/layouts/main-layout';
import { HeadingH1 } from '@/components/shared/typography';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { Project } from '@/types/project';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

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

interface WebPageClientProps {
  initialProjects: Project[];
}

export function WebPageClient({ initialProjects }: WebPageClientProps) {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Extract all unique technologies from projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    initialProjects.forEach((project) => {
      project.tech?.forEach((tech) => techSet.add(tech));
      project.fullTech?.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, [initialProjects]);

  // Filter projects based on selected technology and search query
  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesTech =
        !selectedTech ||
        project.tech?.includes(selectedTech) ||
        project.fullTech?.includes(selectedTech);

      const matchesSearch =
        !searchQuery ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech?.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        project.fullTech?.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesTech && matchesSearch;
    });
  }, [initialProjects, selectedTech, searchQuery]);

  const clearFilters = () => {
    setSelectedTech(null);
    setSearchQuery('');
  };

  const hasActiveFilters = selectedTech || searchQuery;

  return (
    <MainLayout>
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container max-w-5xl py-12 mx-auto px-4"
      >
        <motion.div variants={fadeInUp} className="text-center space-y-4">
          <HeadingH1>Web Projects</HeadingH1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of web applications I&apos;ve built using modern
            technologies.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div variants={fadeInUp} className="mt-8 space-y-4">
          {/* Search Input */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Technology Filter Badges */}
          <div className="flex flex-wrap justify-center gap-2">
            <Badge
              variant={selectedTech === null ? 'default' : 'outline'}
              className="cursor-pointer hover:bg-primary/90 transition-colors"
              onClick={() => setSelectedTech(null)}
            >
              All
            </Badge>
            {allTechnologies.slice(0, 12).map((tech) => (
              <Badge
                key={tech}
                variant={selectedTech === tech ? 'default' : 'outline'}
                className="cursor-pointer hover:bg-primary/90 transition-colors"
                onClick={() =>
                  setSelectedTech(selectedTech === tech ? null : tech)
                }
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Active Filters Indicator */}
          {hasActiveFilters && (
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>
                Showing {filteredProjects.length} of {initialProjects.length}{' '}
                projects
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="h-auto py-1 px-2"
              >
                Clear filters
              </Button>
            </div>
          )}
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={fadeInUp} className="mt-8">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key="projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <p className="text-muted-foreground mb-4">
                  No projects found matching your criteria.
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
}
