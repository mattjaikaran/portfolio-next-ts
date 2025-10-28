import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Matt Jaikaran | Software Engineer',
  description:
    'Full Stack Software Engineer based in NYC, specializing in modern web development, music production, and photography.',
  openGraph: {
    title: 'Matt Jaikaran | Software Engineer',
    description:
      'Full Stack Software Engineer based in NYC, specializing in modern web development, music production, and photography.',
    images: [
      'https://live.staticflickr.com/65535/54271233492_70f7d41d9d_h.jpg',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matt Jaikaran | Software Engineer',
    description:
      'Full Stack Software Engineer based in NYC, specializing in modern web development, music production, and photography.',
    images: [
      'https://live.staticflickr.com/65535/54271233492_70f7d41d9d_h.jpg',
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme-preference"
        >
          <main className="min-h-screen bg-background text-foreground antialiased transition-colors duration-300">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
