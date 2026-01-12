'use client';

import { MainLayout } from '@/components/layouts/main-layout';
import { HeadingH1 } from '@/components/shared/typography';
import { motion, Variants } from 'framer-motion';
import { exerciseData, kettlebellData } from '@/data/workouts';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const kettlebellDays = ['01', '02', '03'];
const kettlebellFocus = [
  'Lower Body + Hinge',
  'Upper Body + Grind',
  'Full Body Conditioning',
];

export default function HealthPage() {
  return (
    <MainLayout>
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container max-w-4xl py-20 mx-auto px-4"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="space-y-4 mb-16">
          <HeadingH1>Workout Routines</HeadingH1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Structured routines I&apos;ve built over time, tracked with{' '}
            <a
              href="https://hevy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              Hevy
            </a>
            .
          </p>
        </motion.div>

        {/* Gym Split Section */}
        <motion.div variants={fadeInUp} className="mb-6">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Gym Split
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-20"
        >
          {exerciseData.map((exercise, index) => (
            <motion.a
              key={exercise.name}
              href={exercise.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="group"
            >
              <Card className="h-full border border-border/50 hover:border-foreground/20 bg-card/50 hover:bg-card transition-all duration-200">
                <CardContent className="p-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-light text-muted-foreground/40 tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-medium">{exercise.name}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </motion.div>

        {/* Kettlebell Section */}
        <motion.div variants={fadeInUp} className="mb-6">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Kettlebell Program
          </h2>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-10">
          <h3 className="text-2xl font-semibold font-sora mb-2">
            3-Day Kettlebell Routine
          </h3>
          <p className="text-muted-foreground">
            Strength, conditioning, and mobility with minimal equipment.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="space-y-3">
          {kettlebellData.map((exercise, index) => (
            <motion.a
              key={exercise.name}
              href={exercise.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="group block"
            >
              <Card className="border border-border/50 hover:border-foreground/20 bg-card/50 hover:bg-card transition-all duration-200">
                <CardContent className="p-6 flex items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        Day
                      </span>
                      <span className="text-3xl font-light tabular-nums">
                        {kettlebellDays[index]}
                      </span>
                    </div>
                    <div className="h-12 w-px bg-border/50" />
                    <div>
                      <span className="font-medium text-lg">
                        {kettlebellFocus[index]}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 pt-8 border-t border-border/30"
        >
          <p className="text-sm text-muted-foreground/60">
            Click any routine to view the full breakdown →
          </p>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
}
