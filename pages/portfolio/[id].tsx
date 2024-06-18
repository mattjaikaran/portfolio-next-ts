import { useEffect, useState } from 'react';
import {
  HeadingH1,
  HeadingH5,
  Paragraph,
} from '@/components/shared/typography';
import { MainLayout } from '@/layouts/MainLayout';
import { useRouter } from 'next/router';
import { Badge } from '@/components/ui/badge';
import { Spinner } from '@/components/ui/spinner';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import BackButton from '@/components/shared/back-button';
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
      <div className="container mb-4">
        <BackButton route="portfolio" />
      </div>
      {!portfolioDetail?.title ? (
        <div className="container">
          <div className="flex justify-center items-center h-96">
            <Spinner />
          </div>
        </div>
      ) : (
        <div className="container">
          <HeadingH1>{portfolioDetail?.title ?? 'Title'}</HeadingH1>
          {portfolioDetail?.fullTech?.map((t: any) => (
            <Badge key={t} className="mt-2 mr-2">
              {t}
            </Badge>
          ))}

          <Paragraph>
            <small className="italic">{portfolioDetail?.description}</small>
          </Paragraph>

          <HeadingH5>Details</HeadingH5>
          <Paragraph className="lg:pr-32 xl:pr-64">
            {portfolioDetail?.details}
          </Paragraph>
          <HeadingH5 className="mt-8">Links</HeadingH5>
          <Paragraph>
            <a
              href={portfolioDetail?.liveLink}
              target="__blank"
              className="block underline hover:no-underline"
            >
              {portfolioDetail?.liveLink}
            </a>
            <br />
            {portfolioDetail?.githubLinks?.map((repo: any) => (
              <a
                key={repo.link}
                href={repo.link}
                target="__blank"
                className="block underline hover:no-underline"
              >
                {repo.text}
              </a>
            ))}
          </Paragraph>

          <div>
            <Carousel>
              <CarouselContent>
                {portfolioDetail?.images?.map((image: any) => (
                  <CarouselItem key={image}>
                    <div className="w-100">
                      <AspectRatio ratio={16 / 9}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={image}
                          alt="Image"
                          className="object-cover w-full rounded-lg shadow-lg overflow-hidden bg-gray-100 dark:bg-gray-800 dark:shadow-none"
                        />
                      </AspectRatio>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {portfolioDetail?.images?.length > 1 ? (
                <>
                  <CarouselPrevious />
                  <CarouselNext />
                </>
              ) : null}
            </Carousel>
          </div>
        </div>
      )}
    </MainLayout>
  );
}
