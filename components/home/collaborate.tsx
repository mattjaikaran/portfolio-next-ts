'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function Collaborate() {
  return (
    <section className="py-24 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
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
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 p-12 md:p-20"
          variants={fadeInUp}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

          <div className="relative z-10 text-center space-y-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-white/10">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Let&apos;s Work Together
              </h2>
            </div>

            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Have a project in mind? I&apos;m always open to discussing new
              opportunities and collaborations.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="default"
                className="bg-white text-gray-900 hover:bg-white/90"
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-foreground hover:bg-white/80 dark:hover:bg-white/10"
              >
                <Link href="/web">View Projects</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
