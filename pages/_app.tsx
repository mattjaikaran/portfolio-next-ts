import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main
        className={`${inter.className} min-h-screen bg-background text-foreground antialiased transition-colors duration-300`}
      >
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
