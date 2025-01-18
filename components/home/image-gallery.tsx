import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { featuredPhotos } from '@/data/photos';
import { Button } from '../ui/button';
import Link from 'next/link';

export const ImageGallery = () => {
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="w-full max-w-[2000px] mx-auto px-4 md:px-8 py-16"
      id="gallery"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {featuredPhotos.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative aspect-[2/3] w-full"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 2}
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
      {/* View All Button */}
      <motion.div className="text-center mt-12" variants={fadeInUp}>
        <Link href="/photos">
          <Button variant="outline" className="group relative px-6">
            View All Photos
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};
