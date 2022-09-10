import type { NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '@/views/layouts/MainLayout';
import PortfolioDetail from '@/views/dotcom/PortfolioDetail';

const PortfolioDetailPage: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Matt Jaikaran - Portfolio Detail</title>
        <meta
          name="PortfolioDetail Page"
          content="meta content for PortfolioDetail Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PortfolioDetail />
    </MainLayout>
  );
};

export default PortfolioDetailPage;
