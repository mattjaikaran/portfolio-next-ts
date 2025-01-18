import { MainLayout } from '@/layouts/MainLayout';
import { HeadingH1 } from '@/components/shared/typography';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useRouter } from 'next/router';
import { PortfolioItem, portfolioData } from '@/data/portfolio';
import { Badge } from '@/components/ui/badge';
import { motion, Variants } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function WebPage() {
  const router = useRouter();

  const WebCard = ({
    title,
    description,
    tech,
    id,
    images,
    liveLink,
    githubLinks,
  }: PortfolioItem) => (
    <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
      <Card className="group h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          {images?.[0] ? (
            <img
              src={images[0]}
              alt={title}
              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 dark:from-purple-900/30 dark:to-blue-900/30" />
          )}
        </div>

        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>{title}</span>
            <div className="flex gap-2">
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              {githubLinks?.[0] && (
                <a
                  href={githubLinks[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
            </div>
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {tech?.map((t: string) => (
              <Badge key={t} variant="secondary" className="bg-secondary/50">
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter>
          <Button
            variant="ghost"
            className="group/btn w-full justify-between hover:bg-primary hover:text-primary-foreground"
            onClick={() => router.push(`/web/${id}`)}
          >
            View Details
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );

  return (
    <MainLayout>
      <div className="container py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <HeadingH1>Web</HeadingH1>
            <p className="text-muted-foreground mt-4">
              {`A collection of fullstack applications I've worked on.`}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {portfolioData.map((item: PortfolioItem) => (
              <WebCard key={item.id} {...item} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </MainLayout>
  );
}
