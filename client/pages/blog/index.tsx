import type { NextPage } from 'next';
import Head from 'next/head';
import Blog from '@/views/dotcom/Blog';
import MainLayout from '@/views/layouts/MainLayout';

const BlogPage: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Matt Jaikaran - Blog </title>
        <meta name="Blog Page" content="meta content for Blog Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Blog name="John Doe" date={new Date('2022-04-06T19:01:27Z')} />
    </MainLayout>
  );
};

export default BlogPage;
