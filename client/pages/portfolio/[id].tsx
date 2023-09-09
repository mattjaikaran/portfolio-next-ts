import { HeadingH1, Paragraph } from '@/components/typography';
import { MainLayout } from '@/layouts/MainLayout';
import { useRouter } from 'next/router';

export default function PortfolioDetail() {
  const router = useRouter();
  return (
    <MainLayout>
      <div className="container">
        <HeadingH1>Portfolio id {router.query.id}</HeadingH1>
        <Paragraph>Project details here</Paragraph>
      </div>
    </MainLayout>
  );
}
