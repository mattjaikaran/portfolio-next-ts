import { NextPage } from 'next'
import Head from 'next/head'
import MainLayout from 'views/layouts/MainLayout'
import PortfolioDetail from '@/components/portfolio/PortfolioDetail'

const PortfolioDetailPage: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Matt Jaikaran - PortfolioPage</title>
        <meta
          name="PortfolioPage Page"
          content="meta content for PortfolioPage Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PortfolioDetail />
    </MainLayout>
  )
}

export default PortfolioDetailPage