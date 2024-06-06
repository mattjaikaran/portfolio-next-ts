import { MainLayout } from '@/layouts/MainLayout';
import { HeadingH1 } from '@/components/typography';
import { aboutData } from '@/data/portfolio';
import ExperienceCard from '@/components/experience-card';
import EducationCard from '@/components/education-card';

export default function About() {
  return (
    <MainLayout>
      <div className="container">
        <div className="lg:pr-32 xl:pr-64 mb-24">
          <HeadingH1>About</HeadingH1>
          {/* About */}
          <div
            className="my-8"
            dangerouslySetInnerHTML={{ __html: aboutData }}
          />

          <div className="grid sm:grid-cols-2 gap-4">
            <ExperienceCard />
            <EducationCard />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
