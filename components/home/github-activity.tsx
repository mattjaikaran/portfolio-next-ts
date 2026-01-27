'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { HeadingH2 } from '@/components/shared/typography';
import { Github, Star, GitFork, ExternalLink, Code2 } from 'lucide-react';
import Link from 'next/link';

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}

const languageColors: Record<string, string> = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-green-500',
  Ruby: 'bg-red-500',
  Go: 'bg-cyan-500',
  Rust: 'bg-orange-500',
  Java: 'bg-red-600',
  CSS: 'bg-purple-500',
  HTML: 'bg-orange-600',
  Shell: 'bg-green-600',
  Vue: 'bg-emerald-500',
};

export function GitHubActivity() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('/api/github');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setRepos(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  if (error) {
    return null; // Silently fail if GitHub API is unavailable
  }

  return (
    <section className="py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Github className="w-5 h-5 text-primary" />
            </div>
            <HeadingH2>Recent GitHub Activity</HeadingH2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out some of my recent open source projects and contributions
          </p>
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="pt-6">
                  <div className="h-4 bg-muted rounded w-3/4 mb-4" />
                  <div className="h-3 bg-muted rounded w-full mb-2" />
                  <div className="h-3 bg-muted rounded w-2/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="h-full hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="pt-6 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Code2 className="w-4 h-4 text-muted-foreground" />
                          <h3 className="font-semibold group-hover:text-primary transition-colors truncate">
                            {repo.name}
                          </h3>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                        {repo.description || 'No description available'}
                      </p>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          {repo.language && (
                            <span className="flex items-center gap-1">
                              <span
                                className={`w-3 h-3 rounded-full ${
                                  languageColors[repo.language] || 'bg-gray-500'
                                }`}
                              />
                              {repo.language}
                            </span>
                          )}
                          {repo.stargazers_count > 0 && (
                            <span className="flex items-center gap-1">
                              <Star className="w-3 h-3" />
                              {repo.stargazers_count}
                            </span>
                          )}
                          {repo.forks_count > 0 && (
                            <span className="flex items-center gap-1">
                              <GitFork className="w-3 h-3" />
                              {repo.forks_count}
                            </span>
                          )}
                        </div>
                      </div>

                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-3">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <Badge
                              key={topic}
                              variant="secondary"
                              className="text-xs"
                            >
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Button variant="outline" asChild>
            <Link
              href="https://github.com/mattjaikaran"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View All Repositories
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
