import { motion, Variants } from 'framer-motion';
import { MainLayout } from '@/layouts/MainLayout';
import { currentMusicData, pastMusicData } from '@/data/music';
import { MusicCard } from '@/components/music/MusicCard';
import { HeadingH1 } from '@/components/shared/typography';

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

export default function MusicPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-16"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <HeadingH1>Music</HeadingH1>
            <p className="text-muted-foreground mt-4">
              {`A collection of music projects I've worked on in the past.`}
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {pastMusicData.map(project => (
              <MusicCard key={project.id} project={project} />
            ))}
            {currentMusicData.map(project => (
              <MusicCard key={project.id} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </MainLayout>
  );
}
