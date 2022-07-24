import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MainLayout from 'views/layouts/MainLayout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <h1>Home</h1>
    </MainLayout>
  )
}

export default Home
