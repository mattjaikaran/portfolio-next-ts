import { HeadingH1, Paragraph } from '@/components/typography';
import { MainLayout } from '@/layouts/MainLayout';
import { useRouter } from 'next/router';
import { PortfolioItems, portfolioData } from '@/data/portfolio';
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import axios from 'axios';

export default function PortfolioDetail() {
  const router = useRouter();
  const [portfolioDetail, setPortfolioDetail] = useState<any>({});

  useEffect(() => {
    const renderPortfolioData = async () => {
      try {
        const response = await axios.get(`/api/portfolio/${router.query.id}`);
        console.log('response', response);
        console.log('response.data', response.data);
        setPortfolioDetail(response.data.data);
        return response;
      } catch (error) {
        console.log('error in renderPortfolioData ~>', error);
      }
    };
    renderPortfolioData();
  }, [router.query.id]);
  return (
    <MainLayout>
      <div className="container">
        <HeadingH1>{portfolioDetail.title ?? 'Title'}</HeadingH1>
        {portfolioDetail.tech?.map((t: any) => (
          <Badge key={t} className="mt-2 mr-2">
            {t}
          </Badge>
        ))}
        <Paragraph>Project details here</Paragraph>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* <img
          src="https://live.staticflickr.com/65535/53206588558_cfee562928_k.jpg"
          width="865"
          height="2048"
          alt="rewyrehomepagedesktop"
        /> */}
      </div>
    </MainLayout>
  );
}
