import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { ArrowRight, Code2, Music4, Rocket, Megaphone } from 'lucide-react';
import Link from 'next/link';

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

const services = [
  {
    title: 'Web Development',
    description:
      'Full-stack development services for startups and businesses. From MVPs to scalable applications.',
    icon: Code2,
    offerings: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'Internal Tools & Dashboards',
      'API Development',
    ],
    cta: 'Start Project',
    href: '/contact',
  },
  {
    title: 'Music Production',
    description:
      'From songwriting to final masters, bringing your musical vision to life with professional production.',
    icon: Music4,
    offerings: [
      'Music Production',
      'Mixing & Mastering',
      'Creative Direction',
      'Artist Development',
    ],
    cta: 'Make Music',
    href: '/contact',
  },
  {
    title: 'Technical Strategy',
    description:
      'Helping startups build strong technical foundations and scale efficiently.',
    icon: Rocket,
    offerings: [
      'Architecture Design',
      'Tech Stack Selection',
      'MVP Development',
      'Team Building',
    ],
    cta: 'Get Started',
    href: '/contact',
  },
  {
    title: 'Brand Development',
    description:
      'Creating compelling brand identities and digital experiences that resonate with your audience.',
    icon: Megaphone,
    offerings: [
      'Brand Strategy',
      'Digital Presence',
      'Content Direction',
      'Launch Planning',
    ],
    cta: 'Build Brand',
    href: '/contact',
  },
];

export function Collaborate() {
  return (
    <section className="py-24 px-4">
      <motion.div
        className="max-w-6xl mx-auto space-y-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div className="text-center space-y-4" variants={fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Services
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Expertise in web development, music production, and brand building.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
        >
          {services.map(service => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="p-6 h-full bg-card hover:bg-accent/5 transition-colors duration-300">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-foreground/80">{service.description}</p>
                  <ul className="space-y-2">
                    {service.offerings.map(offering => (
                      <li
                        key={offering}
                        className="text-sm text-foreground/70 flex items-center"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                        {offering}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link href={service.href}>
                      <Button className="w-full group">
                        {service.cta}
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div variants={fadeInUp} className="text-center">
          <p className="text-foreground/80 mb-6">
            {`Have a different project in mind? Let's discuss how we can work
            together.`}
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="group">
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
