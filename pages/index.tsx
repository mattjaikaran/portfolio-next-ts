import { Hero } from '@/components/home/hero';
import { WebProjects } from '@/components/home/WebProjects';
import { SkillsSection } from '@/components/home/SkillsSection';
import { FeaturedPhotos } from '@/components/home/FeaturedPhotos';
import { Collaborate } from '@/components/home/collaborate';
import { FeaturedWork } from '@/components/home/FeaturedWork';
import { MainLayout } from '@/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <WebProjects />
      <SkillsSection />
      {/* <FeaturedWork /> */}
      <FeaturedPhotos />
      <Collaborate />
    </MainLayout>
  );
}
