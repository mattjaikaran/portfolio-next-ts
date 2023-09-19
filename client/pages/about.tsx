import { MainLayout } from '@/layouts/MainLayout';
import { HeadingH1, Paragraph } from '@/components/typography';

export default function About() {
  return (
    <MainLayout>
      <div className="container">
        <HeadingH1>About</HeadingH1>
        <Paragraph>I am me.</Paragraph>
      </div>
    </MainLayout>
  );
}
