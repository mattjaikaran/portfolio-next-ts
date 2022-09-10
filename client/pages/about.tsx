import type { NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '@/views/layouts/MainLayout';
import About from '@/views/dotcom/About';

const AboutPage: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Matt Jaikaran - About</title>
        <meta name="About Page" content="meta content for About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
    </MainLayout>
  );
};

export default AboutPage;
