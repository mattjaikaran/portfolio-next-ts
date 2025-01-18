// @next/next/no-img-element
import { useEffect, useState } from 'react';
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
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Calendar,
  Building2,
  Layers,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import axios from 'axios';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function PortfolioDetail() {
  const router = useRouter();
  const [portfolioDetail, setPortfolioDetail] = useState<any>({});

  useEffect(() => {
    const renderPortfolioData = async () => {
      try {
        const response = await axios.get(`/api/portfolio/${router.query.id}`);
        setPortfolioDetail(response.data.data);
        return response;
      } catch (error) {
        console.log('error in renderPortfolioData ~>', error);
      }
    };
    if (router.query.id) renderPortfolioData();
  }, [router.query.id]);

  if (!portfolioDetail?.title) {
    return (
      <MainLayout>
        <div className="container">
          <div className="flex justify-center items-center h-96">
            <Spinner />
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <BackButton route="portfolio" />

        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          className="space-y-12 mt-8"
        >
          {/* Hero Section */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            {portfolioDetail.images?.[0] ? (
              <img
                src={portfolioDetail.images[0]}
                alt={portfolioDetail.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 dark:from-purple-900/30 dark:to-blue-900/30" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {portfolioDetail.title}
              </h1>
              <p className="text-xl text-white/80 max-w-2xl">
                {portfolioDetail.description}
              </p>

              {/* Quick Stats */}
              <div className="flex gap-6 mt-6">
                {portfolioDetail.company && (
                  <div className="flex items-center text-white/90">
                    <Building2 className="w-4 h-4 mr-2" />
                    <span>{portfolioDetail.company}</span>
                  </div>
                )}
                {portfolioDetail.date && (
                  <div className="flex items-center text-white/90">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{portfolioDetail.date}</span>
                  </div>
                )}
                {portfolioDetail.tech && (
                  <div className="flex items-center text-white/90">
                    <Layers className="w-4 h-4 mr-2" />
                    <span>{portfolioDetail.tech.length} Technologies</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left Column: Details & Tech Stack */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 space-y-8"
            >
              {/* Project Details */}
              <section className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">Project Details</h2>
                <p className="text-muted-foreground">
                  {portfolioDetail.details}
                </p>
              </section>

              {/* Tech Stack */}
              {portfolioDetail.fullTech && (
                <section>
                  <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
                  <div className="flex flex-wrap gap-2">
                    {portfolioDetail.fullTech.map((tech: string) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </section>
              )}

              {/* Project Images */}
              {portfolioDetail.images && portfolioDetail.images.length > 0 && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">Project Gallery</h2>
                  <Carousel>
                    <CarouselContent>
                      {portfolioDetail.images.map((image: string) => (
                        <CarouselItem key={image}>
                          <AspectRatio ratio={16 / 9}>
                            <img
                              src={image}
                              alt={portfolioDetail.title}
                              className="rounded-lg object-cover w-full h-full"
                            />
                          </AspectRatio>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {portfolioDetail.images.length > 1 && (
                      <>
                        <CarouselPrevious />
                        <CarouselNext />
                      </>
                    )}
                  </Carousel>
                </section>
              )}
            </motion.div>

            {/* Right Column: Links & Additional Info */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Project Links */}
              <section className="bg-card rounded-xl p-6 space-y-4">
                <h2 className="text-xl font-semibold">Project Links</h2>
                <div className="space-y-3">
                  {portfolioDetail.liveLink && (
                    <Button
                      variant="outline"
                      className="w-full justify-between"
                      asChild
                    >
                      <a
                        href={portfolioDetail.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Site
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  )}
                  {portfolioDetail.githubLinks?.map(
                    (repo: { text: string; link: string }) => (
                      <Button
                        key={repo.link}
                        variant="outline"
                        className="w-full justify-between"
                        asChild
                      >
                        <a
                          href={repo.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {repo.text}
                          <Github className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    )
                  )}
                </div>
              </section>

              {/* Core Technologies */}
              {portfolioDetail.tech && (
                <section className="bg-card rounded-xl p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Core Technologies
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {portfolioDetail.tech.map((tech: string) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-secondary/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </section>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
}
