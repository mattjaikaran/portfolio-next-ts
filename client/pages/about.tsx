import About from '@/components/dotcom/About'
import Head from 'next/head'
import MainLayout from 'views/layouts/MainLayout'

const AboutPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Matt Jaikaran - AboutPage</title>
        <meta
          name="AboutPage Page"
          content="meta content for AboutPage Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>About</h1>
      <About />
    </MainLayout>
  )
}

export default AboutPage