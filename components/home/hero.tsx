import { siteConfig } from '@/config/site';
import { HeadingH1, Paragraph } from '../shared/typography';
import router from 'next/router';
import { Button } from '../ui/button';

export default function Hero() {
  return (
    <div className="px-16 py-32 md:p-64 text-center heroImg">
      <HeadingH1 className="text-foreground">{siteConfig.name}</HeadingH1>
      <Paragraph className="text-foreground">
        {siteConfig.description}
      </Paragraph>
      <Button
        variant="outline"
        className="bg-foreground text-background"
        onClick={() => router.push('/portfolio')}
      >
        View Portfolio
      </Button>
    </div>
  );
}
