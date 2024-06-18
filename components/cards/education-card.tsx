import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { educationData } from '@/data/portfolio';
import { Paragraph } from '../shared/typography';

export default function EducationCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Education</CardTitle>
      </CardHeader>
      <CardContent>
        {educationData.map((edu, index) => (
          <div key={index} className="mb-4">
            <Paragraph>
              <strong>{edu.title}</strong>
              {edu.location ? (
                <>
                  <br />
                  <small>{edu.location}</small>
                </>
              ) : null}
              <br />
              {edu.description}
              <br />
              {edu.type}
            </Paragraph>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
