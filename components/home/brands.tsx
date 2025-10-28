'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const brands = [
  {
    name: 'Rewyre',
    logo: '/images/rewyre-logo.svg',
    url: 'https://rewyre.com',
    width: 'w-64',
  },
  {
    name: 'Spotify',
    logo: '/images/spotify-green.png',
    url: 'https://spotify.com',
    width: 'w-64',
  },
  {
    name: 'Hubble',
    logo: '/images/hubble.svg',
    url: 'https://hubblecontacts.com',
    width: 'w-64',
  },
  {
    name: 'Avon',
    logo: '/images/avon.png',
    url: 'https://avon.com',
    width: 'w-64',
  },
  {
    name: 'HyVee',
    logo: '/images/hyvee.png',
    url: 'https://www.hy-vee.com',
    width: 'w-64',
  },
  { name: 'GM', logo: '/images/gm.png', url: 'https://gm.com', width: 'w-32' },
];

export function Brands() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <motion.div
        className="max-w-6xl mx-auto space-y-16"
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
        <motion.div className="text-center space-y-4" variants={fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Brands Worked With
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Collaborating with innovative companies to build impactful digital
            solutions.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center justify-items-center"
        >
          {brands.map((brand) => (
            <motion.a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
              <div className="relative">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className={`${brand.width} transition-opacity opacity-80 group-hover:opacity-100 dark:brightness-0 dark:invert`}
                />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
