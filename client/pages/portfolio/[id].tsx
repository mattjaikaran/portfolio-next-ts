import { HeadingH1, Paragraph } from '@/components/typography';
import { MainLayout } from '@/layouts/MainLayout';
import { useRouter } from 'next/router';
import { PortfolioItems, sampleData } from '@/data/portfolio';
import { useEffect, useState } from 'react';

export default function PortfolioDetail() {
  const router = useRouter();
  console.log('router.query', router.query);
  const [portfolioDetail, setPortfolioDetail] = useState<any>({});
  console.log('portfolioDetail', portfolioDetail);
  return (
    <MainLayout>
      <div className="container">
        <HeadingH1>{portfolioDetail.title}</HeadingH1>
        <Paragraph>Project details here</Paragraph>
        {/* <Paragraph>{data.tech?.map((t: any) => t)}</Paragraph> */}
      </div>
    </MainLayout>
  );
}
