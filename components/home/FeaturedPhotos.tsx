import { motion } from 'framer-motion';
import { photoData } from '@/data/photos';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function FeaturedPhotos() {
  const featuredPhotos = [
    photoData[0],
    photoData[1],
    photoData[2],
    photoData[3],
    photoData[4],
    photoData[5],
  ];

  return (
    <section className="py-0 md:py-16 lg:py-24">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 xxl:grid-cols-3 gap-0 md:gap-12 lg:gap-12 max-w-[2000px] mx-auto px-0 lg:px-12"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {featuredPhotos.map((photo, index) => (
          <motion.div
            key={photo.src}
            variants={fadeInUp}
            className={`relative w-full h-[90vh] md:h-[80vh] lg:h-[70vh] ${
              index >= 3 ? 'hidden md:block' : ''
            }`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
