import Head from 'next/head';
import { siteConfig } from '@/config/site';
import { MainLayout } from '@/layouts/MainLayout';
import { Hero } from '@/components/home/hero';
import { WebProjects } from '@/components/home/WebProjects';
import { ImageGallery } from '@/components/home/image-gallery';

export default function HomePage() {
  return (
    <MainLayout>
      <Head>
        <title>{siteConfig.name}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative">
          <Hero />
        </section>

        {/* Web Projects Section */}
        <section id="projects" className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,theme(colors.purple.50)_0%,transparent_100%)] dark:bg-[radial-gradient(60%_60%_at_50%_0%,theme(colors.purple.900/0.2)_0%,transparent_100%)]" />
          <WebProjects />
        </section>

        {/* Image Gallery Section */}
        <section className="relative py-16" id="gallery">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,theme(colors.blue.50)_0%,transparent_100%)] dark:bg-[radial-gradient(60%_60%_at_50%_0%,theme(colors.blue.900/0.2)_0%,transparent_100%)]" />
          <ImageGallery />
        </section>
      </div>
    </MainLayout>
  );
}
