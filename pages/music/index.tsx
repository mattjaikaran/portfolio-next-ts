import { motion, Variants } from 'framer-motion';
import { MainLayout } from '@/layouts/MainLayout';
import { MusicProject } from '@/types/music';
import { Button } from '@/components/ui/button';
import { Music2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { formattedDate } from '@/lib/utils';

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

// This would come from your data source
const musicProjects: MusicProject[] = [
  {
    id: '1',
    title: 'Reflections',
    type: 'EP',
    releaseDate: '2024-01-15',
    coverArt: '/images/music/reflections.jpg',
    tracks: [
      {
        id: '1',
        title: 'Midnight Drive',
        artist: 'Matt Jaikaran',
        releaseDate: '2024-01-15',
        coverArt: '/images/music/reflections.jpg',
        streamingLinks: {
          spotify: 'https://open.spotify.com/track/xxx',
          appleMusic: 'https://music.apple.com/xxx',
          soundcloud: 'https://soundcloud.com/xxx',
        },
        role: ['Producer', 'Mixing Engineer', 'Songwriter'],
        genre: ['Electronic', 'Ambient'],
      },
      // Add more tracks
    ],
    streamingLinks: {
      spotify: 'https://open.spotify.com/album/xxx',
      appleMusic: 'https://music.apple.com/xxx',
      soundcloud: 'https://soundcloud.com/xxx',
    },
    role: ['Producer', 'Mixing Engineer', 'Songwriter'],
    genre: ['Electronic', 'Ambient'],
    description:
      'A journey through sound and emotion, exploring the boundaries of electronic and ambient music.',
  },
  // Add more projects
];

export default function MusicPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400"
            variants={fadeInUp}
          >
            Music Portfolio
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Producer • Mixing Engineer • Songwriter
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {musicProjects.map(project => (
            <motion.div
              key={project.id}
              className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
            >
              {/* Cover Art */}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={project.coverArt}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {project.streamingLinks.spotify && (
                    <Link
                      href={project.streamingLinks.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="icon"
                        variant="ghost"
                        className="rounded-full"
                      >
                        <svg
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                        </svg>
                      </Button>
                    </Link>
                  )}
                  {project.streamingLinks.appleMusic && (
                    <Link
                      href={project.streamingLinks.appleMusic}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="icon"
                        variant="ghost"
                        className="rounded-full"
                      >
                        <Music2 className="h-6 w-6" />
                      </Button>
                    </Link>
                  )}
                  {project.streamingLinks.soundcloud && (
                    <Link
                      href={project.streamingLinks.soundcloud}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="icon"
                        variant="ghost"
                        className="rounded-full"
                      >
                        <svg
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11.56 24h.88l.32-4.17.32 4.17h.88l.48-6.19-.48-6.19h-.88l-.32 4.17-.32-4.17h-.88l-.48 6.19.48 6.19zm-3.65 0h.88l.32-3.25-.32-7.11h-.88l-.48 7.11.48 3.25zm-1.84-.13h.88l.48-3.12-.48-5.86h-.88l-.32 5.86.32 3.12zm-1.84-.26h.88l.32-2.86-.32-5.47h-.88l-.48 5.47.48 2.86zm-1.84-.26h.88l.48-2.6-.48-4.69h-.88l-.32 4.69.32 2.6zm-1.84-.39h.88l.32-2.21-.32-3.9h-.88L0 17.75l.71 2.21zm18.26-4.17c-.32 0-.56.13-.88.13-.88.26-1.04.91-1.04 1.82v4.17h1.84v-6.12zm2.79 6.12h1.84v-8.07c-.39-.26-1.04-.52-1.84-.52-1.04 0-1.52.52-1.84.91l.08 7.68h1.76z" />
                        </svg>
                      </Button>
                    </Link>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <span>{project.type}</span>
                  <span>•</span>
                  <span>{formattedDate(project.releaseDate)}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.role.map(role => (
                    <span
                      key={role}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {role}
                    </span>
                  ))}
                </div>
                {project.description && (
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MainLayout>
  );
}
