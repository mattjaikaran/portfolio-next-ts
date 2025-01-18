import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Code2, Briefcase, Users, Rocket } from 'lucide-react';

const stats = [
  {
    value: 10,
    label: 'Years Experience',
    description: 'Building digital products',
    icon: Briefcase,
  },
  {
    value: 50,
    label: 'Projects Delivered',
    description: 'Across various industries',
    icon: Code2,
  },
  {
    value: 15,
    label: 'Startups Helped',
    description: 'From concept to launch',
    icon: Rocket,
  },
  {
    value: 30,
    label: 'Happy Clients',
    description: 'And growing partnerships',
    icon: Users,
  },
];

interface AnimatedCounterProps {
  value: number;
  duration?: number;
}

function AnimatedCounter({ value, duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(value * percentage));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration, isInView]);

  return <span ref={nodeRef}>{count}+</span>;
}

export function StatsSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-muted/50 to-background">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          initial: {},
          animate: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(stat => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
                <div className="relative p-6 bg-card rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-foreground">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
