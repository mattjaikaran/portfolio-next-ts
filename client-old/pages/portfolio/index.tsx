import type { NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '@/views/layouts/MainLayout';
import Portfolio from '@/views/dotcom/Portfolio';
import { Container } from '@mantine/core';

const PortfolioPage: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Matt Jaikaran - PortfolioPage</title>
        <meta name="Portfolio Page" content="meta content for Portfolio Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container pb="xl">
        <Portfolio />
      </Container>
    </MainLayout>
  );
};

export default PortfolioPage;
