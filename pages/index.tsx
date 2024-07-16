/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import Head from 'next/head';
import { siteConfig } from '@/config/site';
import { MainLayout } from '@/layouts/MainLayout';

import Hero from '@/components/home/hero';
import Brands from '@/components/home/brands';
import Collaborate from '@/components/home/collaborate';

import pages from '@/public/images/jj-ying-WmnsGyaFnCQ-unsplash.jpg';
import birds from '@/public/images/birds.jpg';
import unionSquareCouple from '@/public/images/photos/unionsquare-couple.jpg';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>{siteConfig.name}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-fluid xl:container">
        <Hero />
        <img src={pages.src} alt="img" className="sm:hidden" />
        <Brands />
        <img src={unionSquareCouple.src} alt="img" className="sm:hidden" />
        <img src={birds.src} alt="img" className="sm:hidden" />
        <Collaborate />
      </div>
    </MainLayout>
  );
};

export default Home;
