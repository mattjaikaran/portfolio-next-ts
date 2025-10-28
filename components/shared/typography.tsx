'use client';

import { cn } from '@/lib/utils';
import { HTMLAttributes, BlockquoteHTMLAttributes } from 'react';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

interface BlockquoteProps extends BlockquoteHTMLAttributes<HTMLQuoteElement> {
  children: React.ReactNode;
}

interface CodeProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

interface SmallProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

interface DivProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function HeadingH1({ children, className, ...props }: HeadingProps) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl',
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function HeadingH2({ children, className, ...props }: HeadingProps) {
  return (
    <h2
      className={cn(
        'scroll-m-20 text-3xl font-semibold tracking-tight',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function HeadingH3({ children, className, ...props }: HeadingProps) {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function HeadingH4({ children, className, ...props }: HeadingProps) {
  return (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  );
}

export function Paragraph({ children, className, ...props }: ParagraphProps) {
  return (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function BlockQuote({ children, className, ...props }: BlockquoteProps) {
  return (
    <blockquote
      className={cn(
        'mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground',
        className,
      )}
      {...props}
    >
      {children}
    </blockquote>
  );
}

export function InlineCode({ children, className, ...props }: CodeProps) {
  return (
    <code
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        className,
      )}
      {...props}
    >
      {children}
    </code>
  );
}

export function Lead({ children, className, ...props }: ParagraphProps) {
  return (
    <p className={cn('text-xl text-muted-foreground', className)} {...props}>
      {children}
    </p>
  );
}

export function Large({ children, className, ...props }: DivProps) {
  return (
    <div className={cn('text-lg font-semibold', className)} {...props}>
      {children}
    </div>
  );
}

export function Small({ children, className, ...props }: SmallProps) {
  return (
    <small
      className={cn('text-sm font-medium leading-none', className)}
      {...props}
    >
      {children}
    </small>
  );
}

export function Muted({ children, className, ...props }: ParagraphProps) {
  return (
    <p className={cn('text-sm text-muted-foreground', className)} {...props}>
      {children}
    </p>
  );
}
