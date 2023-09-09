import type { NextPage } from 'next';
import Head from 'next/head';
import BlogDetail from 'views/dotcom/BlogDetail';
import MainLayout from 'views/layouts/MainLayout';

const BlogDetailPage: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Matt Jaikaran - Blog Detail</title>
        <meta
          name="BlogDetail Page"
          content="meta content for BlogDetail Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogDetail />
    </MainLayout>
  );
};

export default BlogDetailPage;
