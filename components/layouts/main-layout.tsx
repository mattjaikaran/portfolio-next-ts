'use client';

import * as React from 'react';
import { Navbar } from '@/components/shared/navbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-16">{children}</main>
    </div>
  );
}
