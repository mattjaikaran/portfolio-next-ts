import { Hero } from '@/components/home/hero';
import { WebProjects } from '@/components/home/WebProjects';
import { SkillsSection } from '@/components/home/SkillsSection';
import { FeaturedPhotos } from '@/components/home/FeaturedPhotos';
import { Collaborate } from '@/components/home/collaborate';
import { FeaturedWork } from '@/components/home/FeaturedWork';
import { MainLayout } from '@/layouts/MainLayout';
import { Brands } from '@/components/home/brands';

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <WebProjects />
      <SkillsSection />
      <Brands />
      {/* <FeaturedWork /> */}
      <FeaturedPhotos />
      <Collaborate />
    </MainLayout>
  );
}
