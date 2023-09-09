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

interface PortfolioItems {
  id: number;
  title: string;
  description: string;
  content?: string;
  url: string;
}

const sampleData: PortfolioItems[] = [
  {
    id: 1,
    title: 'Title 1',
    description: 'Description 1',
    url: '/portfolio/1',
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'Description 2',
    url: '/portfolio/2',
  },
  {
    id: 3,
    title: 'Title 3',
    description: 'Description 3',
    url: '/portfolio/3',
  },
  {
    id: 4,
    title: 'Title 4',
    description: 'Description 4',
    url: '/portfolio/4',
  },
  {
    id: 5,
    title: 'Title 5',
    description: 'Description 5',
    url: '/portfolio/5',
  },
  {
    id: 6,
    title: 'Title 6',
    description: 'Description 6',
    url: '/portfolio/6',
  },
];

export default function Portfolio() {
  const PortfolioCard = (props: PortfolioItems) => (
    <Card className="">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>{props.content}</CardContent>
      <CardFooter className="flex">
        <Button>View Details</Button>
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
          {renderPortfolioItems(sampleData)}
        </div>
      </div>
    </MainLayout>
  );
}
