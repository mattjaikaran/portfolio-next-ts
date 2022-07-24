import Contact from '@/components/dotcom/Contact'
import { NextPage } from 'next'
import Head from 'next/head'
import MainLayout from 'views/layouts/MainLayout'

const ContactPage: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Matt Jaikaran - ContactPage</title>
        <meta
          name="ContactPage Page"
          content="meta content for ContactPage Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>ContactPage</h1>
      <Contact />
    </MainLayout>
  )
}

export default ContactPage