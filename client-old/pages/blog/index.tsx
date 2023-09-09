import type { NextPage } from 'next';
import Head from 'next/head';
import Blog from '@/views/dotcom/Blog';
import MainLayout from '@/views/layouts/MainLayout';
import { Container } from '@mantine/core';

const BlogPage: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Matt Jaikaran - Blog </title>
        <meta name="Blog Page" content="meta content for Blog Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container py="xl">
        <Blog />
      </Container>
    </MainLayout>
  );
};

export default BlogPage;
