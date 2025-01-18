import { useRouter } from 'next/router';
import { HeadingH3 } from '../shared/typography';
import { Button } from '../ui/button';

export default function Collaborate() {
  const router = useRouter();
  return (
    <div className="p-16 md:px-64 md:py-32 text-center">
      <HeadingH3>Want to collaborate on a project?</HeadingH3>
      <Button
        variant="outline"
        className="bg-foreground text-background"
        onClick={() => router.push('/contact')}
      >
        Contact Me
      </Button>
    </div>
  );
}
