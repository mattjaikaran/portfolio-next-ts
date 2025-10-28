'use client';

import * as React from 'react';
import { Navbar } from '@/components/shared/navbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <Navbar />
      </div>
      <main className="pt-20">{children}</main>
    </div>
  );
} 