import Link from 'next/link';
import { Button } from '../ui/button';
import { ChevronLeft } from 'lucide-react';

interface BackButtonProps {
  route: string;
}

const BackButton = ({ route }: BackButtonProps) => {
  return (
    <Link href={`/${route}`}>
      <Button
        variant="ghost"
        size="sm"
        className="group mt-8 hover:bg-background"
      >
        <ChevronLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
        Back to {route.charAt(0).toUpperCase() + route.slice(1)}
      </Button>
    </Link>
  );
};

export default BackButton;
