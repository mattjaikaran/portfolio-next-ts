import { cn } from '@/lib/utils';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'auto';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
}

const aspectRatioClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
  auto: '',
};

export function ResponsiveImage({
  src,
  alt,
  className,
  aspectRatio = 'auto',
  objectFit = 'cover',
}: ResponsiveImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={cn(
        'w-full h-full',
        aspectRatioClasses[aspectRatio],
        objectFit === 'cover' && 'object-cover',
        objectFit === 'contain' && 'object-contain',
        objectFit === 'fill' && 'object-fill',
        objectFit === 'none' && 'object-none',
        className
      )}
    />
  );
}
