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
    cta: 'Discuss Your Project',
    href: '/contact',
  },
  {
    title: 'Music Production',
    description:
      'Professional music production, mixing, and creative direction for artists and brands.',
    icon: Music4,
    offerings: [
      'Music Production',
      'Mixing & Mastering',
      'Creative Direction',
      'Artist Development',
    ],
    cta: 'Start Creating',
    href: '/contact',
  },
  {
    title: 'Startup Consulting',
    description:
      'Technical consulting for startups. From product strategy to technical architecture.',
    icon: Rocket,
    offerings: [
      'MVP Development',
      'Technical Strategy',
      'Architecture Planning',
      'Team Building',
    ],
    cta: 'Get Started',
    href: '/contact',
  },
  {
    title: 'Marketing & Branding',
    description:
      'Launch and scale your brand with strategic marketing and digital presence.',
    icon: Megaphone,
    offerings: [
      'Brand Development',
      'Digital Strategy',
      'Launch Planning',
      'Content Strategy',
    ],
    cta: 'Build Your Brand',
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
        {/* Section Header */}
        <motion.div className="text-center space-y-4" variants={fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Let's Work Together
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Whether you're looking to build a web application, produce music, or
            launch a brand, I offer professional services to help bring your
            vision to life.
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
            Have a different project in mind? Let's discuss how we can work
            together.
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
