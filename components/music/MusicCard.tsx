import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { MusicItem } from '@/data/music';

interface MusicCardProps {
  project: MusicItem;
}

export const MusicCard = ({ project }: MusicCardProps) => {
  return (
    <Link href={`/music/${project.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="group relative h-[300px] rounded-xl overflow-hidden cursor-pointer"
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 dark:from-purple-800/40 dark:to-blue-800/40" />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 className="text-2xl font-bold text-white mb-2 transform group-hover:translate-y-0 transition-transform">
            {project.title}
          </h3>
          <p className="text-white/90 line-clamp-2 transform group-hover:translate-y-0 transition-transform">
            {project.description}
          </p>
          {project.releases && (
            <p className="text-white/70 text-sm mt-2">
              {project.releases.length}{' '}
              {project.releases.length === 1 ? 'Release' : 'Releases'}
            </p>
          )}
        </div>
      </motion.div>
    </Link>
  );
};
