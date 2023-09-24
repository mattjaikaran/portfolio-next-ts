import { MainLayout } from '@/layouts/MainLayout';
import { HeadingH1, Paragraph } from '@/components/typography';
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
import { PortfolioItems, portfolioData } from '@/data/portfolio';
import { Badge } from '@/components/ui/badge';

export default function Portfolio() {
  const router = useRouter();
  const PortfolioCard = (props: PortfolioItems) => (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {props.tech?.map(t => (
          <Badge key={t} className="mt-2 mr-2">
            {t}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="flex">
        <Button onClick={() => router.push(`/portfolio/${props.id}`)}>
          View Details
        </Button>
      </CardFooter>
    </Card>
  );

  const renderPortfolioItems = (items: PortfolioItems[]) => {
    return items.map((item: PortfolioItems) => (
      <PortfolioCard key={item.id} {...item} />
    ));
  };

  return (
    <MainLayout>
      <div className="container">
        <HeadingH1>Portfolio</HeadingH1>
        <Paragraph>{`Here's some of my work`}</Paragraph>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {renderPortfolioItems(portfolioData)}
        </div>
      </div>
    </MainLayout>
  );
}
