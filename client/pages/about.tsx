import { MainLayout } from '@/layouts/MainLayout';
import { HeadingH1, Paragraph } from '@/components/typography';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { aboutData, educationData, experienceData } from '@/data/portfolio';

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

          {/* Grid with 2 Cards. 1 card with experienceData mapped and 1 card with education data */}
          {/* Experience */}
          <div className="grid sm:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  {experienceData.map((exp, index) => (
                    <li key={index} className="mb-4">
                      {exp.description}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
