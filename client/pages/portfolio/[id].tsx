import {
  HeadingH1,
  HeadingH2,
  HeadingH3,
  Paragraph,
} from '@/components/typography';
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
        {portfolioDetail.fullTech?.map((t: any) => (
          <Badge key={t} className="mt-2 mr-2">
            {t}
          </Badge>
        ))}

        <Paragraph>{portfolioDetail.description}</Paragraph>

        <HeadingH3>Details</HeadingH3>
        <Paragraph>{portfolioDetail.details}</Paragraph>
        <HeadingH3 className="mt-8">Links</HeadingH3>
        <Paragraph>
          <a href={portfolioDetail.liveLink} target="__blank">
            {portfolioDetail.liveLink}
          </a>
        </Paragraph>
        {portfolioDetail.githubLinks
          ? portfolioDetail.githubLinks.map((repo: any) => (
              <Paragraph key={repo.link}>
                <a href={repo.link} target="__blank">
                  {repo.text}
                </a>
              </Paragraph>
            ))
          : null}
      </div>
    </MainLayout>
  );
}
