import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { experienceData } from '@/data/portfolio';

export default function ExperienceCard() {
  return (
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
  );
}
