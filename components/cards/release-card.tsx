import { ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

interface Release {
  title: string;
  artist: string;
  image?: string;
  link?: string;
  year?: number;
  url?: string;
}

const ReleaseCard = ({ release }: { release: Release }) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
      {/* Album Art */}
      <div className="relative h-16 w-16 flex-shrink-0 rounded-lg overflow-hidden">
        {release.image ? (
          <img
            src={release.image}
            alt={release.title}
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 dark:from-purple-900/30 dark:to-blue-900/30" />
        )}
      </div>

      {/* Release Info */}
      <div className="flex-grow space-y-1">
        <h3 className="font-semibold text-lg">{release.title}</h3>
        <p className="text-muted-foreground">{release.year}</p>
      </div>

      {/* Action Button */}
      <Button asChild variant="ghost" size="sm">
        <a
          href={release.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          Listen
          <ExternalLink className="h-4 w-4" />
        </a>
      </Button>
    </div>
  );
};

export default ReleaseCard;
