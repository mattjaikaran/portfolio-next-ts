'use client';

import Head from 'next/head';
// @next/next/no-img-element
import { MainLayout } from '@/layouts/MainLayout';
import { motion, Variants } from 'framer-motion';
import { HeadingH1 } from '@/components/shared/typography';
import { photoData } from '@/data/photos';
import { Button } from '@/components/ui/button';
import { Grid, Rows } from 'lucide-react';
import { useState } from 'react';

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

export default function PhotosPage() {
  const [viewMode, setViewMode] = useState<'masonry' | 'grid'>('masonry');

  return (
    <MainLayout>
      <Head>
        <title>Photography | Matt Jaikaran | Software Engineer</title>
        <meta
          name="description"
          content="Photography portfolio of Matt Jaikaran - A collection of photos taken with Sony A7 IV and CampSnap cameras."
        />
        <meta
          property="og:title"
          content="Photography - Matt Jaikaran | Software Engineer"
        />
        <meta
          property="og:description"
          content="Photography portfolio of Matt Jaikaran - A collection of photos taken with Sony A7 IV and CampSnap cameras."
        />
      </Head>
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="w-full max-w-[2000px] mx-auto"
      >
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="container text-center space-y-4 py-12"
        >
          <HeadingH1>Photography</HeadingH1>
          <p className="text-muted-foreground mt-4">
            {`A collection of photos I've taken. I currently shoot with Sony A7 IV
            and a CampSnap "digital disposable" camera.`}
          </p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <div
            className={
              viewMode === 'masonry'
                ? 'columns-1 md:columns-2 gap-0 md:gap-12 [&>div]:mb-0 md:[&>div]:mb-12'
                : 'grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12'
            }
          >
            {photoData.map(photo => (
              <motion.div
                key={photo.src}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="relative break-inside-avoid"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="w-full"
                />
              </motion.div>
            ))}
          </div>

          <div className="hidden md:flex justify-center mt-16 gap-4">
            <Button
              variant={viewMode === 'masonry' ? 'default' : 'outline'}
              size="lg"
              onClick={() => setViewMode('masonry')}
              className="gap-2"
            >
              <Rows className="w-5 h-5" />
              Masonry View
            </Button>
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="lg"
              onClick={() => setViewMode('grid')}
              className="gap-2"
            >
              <Grid className="w-5 h-5" />
              Grid View
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
}
