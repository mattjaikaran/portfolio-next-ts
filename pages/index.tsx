/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { MainLayout } from '@/layouts/MainLayout';
import { Hero } from '@/components/home/hero';
import { Projects } from '@/components/home/projects';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>{siteConfig.name}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative">
          <Hero />
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          ></motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,theme(colors.purple.50)_0%,transparent_100%)] dark:bg-[radial-gradient(60%_60%_at_50%_0%,theme(colors.purple.900/0.2)_0%,transparent_100%)]" />
          <Projects />
        </section>
      </div>
    </MainLayout>
  );
};

export default Home;
