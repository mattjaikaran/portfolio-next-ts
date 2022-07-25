import { NextPage } from 'next'
import Head from 'next/head'
import MainLayout from 'views/layouts/MainLayout'
import Portfolio from 'views/dotcom/Portfolio'

const PortfolioPage: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Matt Jaikaran - PortfolioPage</title>
        <meta
          name="Portfolio Page"
          content="meta content for Portfolio Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Portfolio</h1>
      <Portfolio />
    </MainLayout>
  )
}

export default PortfolioPage