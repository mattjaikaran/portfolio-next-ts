import type { NextPage } from 'next'
import Head from 'next/head'
import MainLayout from 'views/layouts/MainLayout'
import Home from 'views/dotcom/Home'

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Matt Jaikaran - Software Engineer, NYC</title>
        <meta
          name="Home Page"
          content="meta content for Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </MainLayout>
  )
}

export default HomePage
