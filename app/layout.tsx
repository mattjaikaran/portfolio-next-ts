import type { Metadata } from 'next';

import './globals.css';
import { inter, sora } from './fonts';
import { ThemeProvider } from '@/components/shared/theme-provider';

export const metadata: Metadata = {
  title: 'Matt Jaikaran',
  description: 'Full Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sora.variable} font-inter antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
