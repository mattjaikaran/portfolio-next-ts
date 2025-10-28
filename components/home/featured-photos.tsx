'use client';

import { motion } from 'framer-motion';
import { photoData } from '@/data/photos';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const featuredPhotos = [
  photoData[0],
  photoData[1],
  photoData[2],
  photoData[3],
  photoData[4],
  photoData[5],
];

export function FeaturedPhotos() {
  return (
    <section className="py-0 md:py-16 lg:py-24">
      <motion.div
        className="max-w-[2000px] mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {/* Photos Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 xxl:grid-cols-3 gap-0 md:gap-12 lg:gap-12 px-4 lg:px-12"
          variants={fadeInUp}
        >
          {featuredPhotos.map((photo, index) => (
            <motion.div
              key={photo.alt}
              className={`relative w-full h-[90vh] md:h-[80vh] lg:h-[70vh] ${
                index >= 3 ? 'hidden md:block' : ''
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm">{photo.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
