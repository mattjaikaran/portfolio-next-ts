---
to: pages/<%= h.changeCase.paramCase(title) || 'dashboard-page' %>.ts
---
import Head from 'next/head'
import { NextPage } from 'next'
import MainLayout from '@/views/layouts/MainLayout'

const <%= h.changeCase.pascal(title) || 'NewPage' %>: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Matt Jaikaran - <%= h.changeCase.pascal(title) || 'NewPage' %></title>
        <meta
          name="<%= h.changeCase.pascal(title) || 'NewPage' %> Page"
          content="meta content for <%= h.changeCase.pascal(title) || 'NewPage' %> Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1><%= h.changeCase.pascal(title) || 'NewPage' %></h1>
      <p>Lorem ipsum dolor sine.</p>
    </MainLayout>
  )
}

export default <%= h.changeCase.pascal(title) || 'NewPage' %>