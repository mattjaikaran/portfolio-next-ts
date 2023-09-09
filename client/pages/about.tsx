import { MainLayout } from '@/layouts/MainLayout';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { HeadingH1, Paragraph } from '@/components/typography';

export default function About() {
  return (
    <MainLayout>
      <div className="container">
        <HeadingH1>About</HeadingH1>
        <Paragraph>I am me.</Paragraph>
        {/* <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card> */}
      </div>
    </MainLayout>
  );
}
