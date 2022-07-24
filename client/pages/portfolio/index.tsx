import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import MainLayout from 'views/layouts/MainLayout'

const PortfolioPage: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Matt Jaikaran - PortfolioPage</title>
        <meta
          name="PortfolioPage Page"
          content="meta content for PortfolioPage Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>PortfolioPage</h1>
      <p>Lorem ipsum dolor sine.</p>
      <Link href="/portfolio/1">See more</Link>
    </MainLayout>
  )
}

export default PortfolioPage