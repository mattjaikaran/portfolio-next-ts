import Contact from 'views/dotcom/Contact'
import { NextPage } from 'next'
import Head from 'next/head'
import MainLayout from 'views/layouts/MainLayout'

const ContactPage: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Matt Jaikaran - Contact</title>
        <meta
          name="Contact Page"
          content="meta content for Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>ContactPage</h1>
      <Contact />
    </MainLayout>
  )
}

export default ContactPage