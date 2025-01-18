import { cn } from '@/lib/utils';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function HeadingH1({ children, className }: HeadingProps) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-normal tracking-tight lg:text-6xl mt-24 font-sora',
        className
      )}
    >
      {children}
    </h1>
  );
}

export function HeadingH2({ children, className }: HeadingProps) {
  return (
    <h2
      className={cn(
        'scroll-m-20 pb-2 text-3xl font-light tracking-tight transition-colors first:mt-0 font-sora',
        className
      )}
    >
      {children}
    </h2>
  );
}

export function HeadingH3({ children, className }: HeadingProps) {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-light tracking-tight font-sora',
        className
      )}
    >
      {children}
    </h3>
  );
}

export function HeadingH4({ children, className }: HeadingProps) {
  return (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-normal tracking-tight font-sora',
        className
      )}
    >
      {children}
    </h4>
  );
}

export function Paragraph({ children, className }: HeadingProps) {
  return (
    <p
      className={cn(
        'leading-7 [&:not(:first-child)]:mt-6 font-light',
        className
      )}
    >
      {children}
    </p>
  );
}

export function TypographyLead({ children, className }: HeadingProps) {
  return (
    <p className={cn('text-xl text-muted-foreground font-light', className)}>
      {children}
    </p>
  );
}

export function TypographyLarge({ children, className }: HeadingProps) {
  return <div className={cn('text-lg font-normal', className)}>{children}</div>;
}

export function TypographySmall({ children, className }: HeadingProps) {
  return (
    <small className={cn('text-sm font-normal leading-none', className)}>
      {children}
    </small>
  );
}

export function TypographyMuted({ children, className }: HeadingProps) {
  return (
    <p className={cn('text-sm text-muted-foreground font-light', className)}>
      {children}
    </p>
  );
}
