'use client';
import { MainLayout } from '@/layouts/MainLayout';
import { HeadingH1 } from '@/components/shared/typography';
import { motion, Variants } from 'framer-motion';
import { exerciseData } from '@/data/workouts';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dumbbell, ExternalLink } from 'lucide-react';

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

export default function HealthPage() {
  return (
    <MainLayout>
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container max-w-5xl py-12"
      >
        <motion.div variants={fadeInUp} className="text-center space-y-4">
          <HeadingH1>Workout Routines</HeadingH1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of structured workout routines created on the Hevy app.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {exerciseData.map(exercise => (
            <Card
              key={exercise.name}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Dumbbell className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-sora">{exercise.name}</h3>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-primary"
                    asChild
                  >
                    <a
                      href={exercise.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </MainLayout>
  );
}
