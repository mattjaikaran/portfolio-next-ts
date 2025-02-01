import { motion } from 'framer-motion';
import { Layout, Server, Rocket, Wrench, Laptop, Boxes } from 'lucide-react';
import { Card } from '../ui/card';

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

const skills = [
  {
    title: 'Startup Product Development',
    description:
      'Building and scaling products from concept to production in fast-paced environments',
    icon: Rocket,
    technologies: [
      'MVP Development',
      'Product Strategy',
      'Rapid Prototyping',
      'Market Validation',
    ],
  },
  {
    title: 'Frontend Architecture',
    description:
      'Crafting modern web applications with a focus on performance and user experience. Building reusable components and scalable systems.',
    icon: Layout,
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend Systems',
    description:
      'Designing and implementing scalable backend infrastructure and APIs. Translating business requirements into technical solutions.',
    icon: Server,
    technologies: ['Node.js', 'Django', 'FastAPI', 'PostgreSQL'],
  },
  {
    title: 'Internal Tools & Automation',
    description:
      'Creating custom tools and workflows to improve team efficiency and productivity. Utilizing Bash, Python, and other tools to automate tasks and streamline processes.',
    icon: Wrench,
    technologies: [
      'Process Automation',
      'Admin Dashboards',
      'Data Analytics',
      'Custom CMS',
      'Bash',
    ],
  },
  {
    title: 'Technical Leadership',
    description:
      'Leading engineering teams and driving technical decisions in high-growth environments. Mentoring and guiding junior developers.',
    icon: Laptop,
    technologies: [
      'Team Mentorship',
      'Architecture Design',
      'Code Reviews',
      'Tech Stack Selection',
    ],
  },
  {
    title: 'System Architecture',
    description:
      'Building scalable, maintainable systems that grow with your business. Utilizing LLMs and prompt engineering to improve productivity and efficiency.',
    icon: Boxes,
    technologies: [
      'API Design',
      'Data Modeling',
      'Integration Architecture',
      'Prompt Engineering',
    ],
  },
];

export function SkillsSection() {
  return (
    <section className="py-24 px-4 bg-muted/30">
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
            Technical Experience
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Extensive experience in building products from scratch, leading
            engineering teams, and delivering high-impact solutions in startup
            environments.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {skills.map(skill => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-6 h-full bg-card hover:bg-accent/5 transition-colors duration-300">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {skill.title}
                    </h3>
                    <p className="text-foreground/80">{skill.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {skill.technologies.map(tech => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
