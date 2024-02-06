import { MainLayout } from '@/layouts/MainLayout';
import { HeadingH1, HeadingH3, Paragraph } from '@/components/typography';
import { aboutData, educationData, experienceData } from '@/data/portfolio';

export default function About() {
  return (
    <MainLayout>
      <div className="container">
        <div className="lg:pr-32 xl:pr-64 mb-24">
          <HeadingH1>About</HeadingH1>
          {/* About */}
          <div dangerouslySetInnerHTML={{ __html: aboutData }} />

          {/* Experience */}
          <ul>
            {experienceData.map((exp, index) => (
              <li key={index}>{exp.description}</li>
            ))}
          </ul>

          {/* Education */}
          <div className="mt-4 border-t-2 pb-16 md:pb-0">
            <HeadingH3 className="mt-4">Education</HeadingH3>
            {educationData.map((edu, index) => (
              <div key={index} className="mb-4">
                <Paragraph>
                  <strong>{edu.title}</strong>
                  <br />
                  {edu.description}
                  <br />
                  {edu.type}
                </Paragraph>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
