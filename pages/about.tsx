import { NextPage } from 'next';
import { MainLayout } from '@/layouts/MainLayout';
import { HeadingH1 } from '@/components/shared/typography';
import { aboutData } from '@/data/portfolio';

import ExperienceCard from '@/components/cards/experience-card';
import EducationCard from '@/components/cards/education-card';

const About: NextPage = () => {
  return (
    <MainLayout>
      <div className="container">
        <div className="lg:pr-32 xl:pr-64 mb-24">
          <HeadingH1>About</HeadingH1>
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
};

export default About;
