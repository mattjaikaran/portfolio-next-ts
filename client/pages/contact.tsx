import type { NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '@/views/layouts/MainLayout';
import Contact from '@/views/dotcom/Contact';

const ContactPage: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Matt Jaikaran - Contact</title>
        <meta name="Contact Page" content="meta content for Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contact />
    </MainLayout>
  );
};

export default ContactPage;
