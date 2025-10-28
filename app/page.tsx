import { MainLayout } from '@/components/layouts/main-layout';
import { Hero } from '@/components/home/hero';
import { WebProjects } from '@/components/home/web-projects';
import { SkillsSection } from '@/components/home/skills-section';
import { Collaborate } from '@/components/home/collaborate';
import { Brands } from '@/components/home/brands';

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <WebProjects />
      <SkillsSection />
      <Brands />
      {/* <FeaturedWork /> */}
      {/* <FeaturedPhotos /> */}
      <Collaborate />
    </MainLayout>
  );
}
