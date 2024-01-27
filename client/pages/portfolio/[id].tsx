import { HeadingH1, HeadingH3, Paragraph } from '@/components/typography';
import { MainLayout } from '@/layouts/MainLayout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Spinner } from '@/components/ui/spinner';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
    if (router.query.id) renderPortfolioData();
  }, [router.query.id]);

  return (
    <MainLayout>
      {!portfolioDetail?.title ? (
        <div className="container">
          <Spinner />
        </div>
      ) : (
        <div className="container">
          <HeadingH1>{portfolioDetail?.title ?? 'Title'}</HeadingH1>
          {portfolioDetail?.fullTech?.map((t: any) => (
            <Badge key={t} className="mt-2 mr-2">
              {t}
            </Badge>
          ))}

          <Paragraph>{portfolioDetail?.description}</Paragraph>

          <HeadingH3>Details</HeadingH3>
          <Paragraph className="lg:pr-32 xl:pr-64">
            {portfolioDetail?.details}
          </Paragraph>
          <HeadingH3 className="mt-8">Links</HeadingH3>
          <Paragraph>
            <a href={portfolioDetail?.liveLink} target="__blank">
              {portfolioDetail?.liveLink}
            </a>
          </Paragraph>
          {portfolioDetail?.githubLinks
            ? portfolioDetail?.githubLinks.map((repo: any) => (
                <Paragraph key={repo.link}>
                  <a href={repo.link} target="__blank">
                    {repo.text}
                  </a>
                </Paragraph>
              ))
            : null}

          <div>
            <Carousel>
              <CarouselContent>
                {portfolioDetail?.images?.map((image: any) => (
                  <CarouselItem key={image}>
                    <div className="w-100">
                      <AspectRatio ratio={16 / 9}>
                        <Image
                          src={image}
                          width={950}
                          height={1050}
                          layout="responsive"
                          alt="Image"
                          className="rounded-md object-cover"
                        />
                      </AspectRatio>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {portfolioDetail?.images?.length < 2 ? null : (
                <>
                  <CarouselPrevious />
                  <CarouselNext />
                </>
              )}
            </Carousel>
          </div>
        </div>
      )}
    </MainLayout>
  );
}
