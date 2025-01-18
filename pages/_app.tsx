import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Head>
        <title>Matt Jaikaran | Software Engineer</title>
        <meta
          name="description"
          content="Full Stack Software Engineer based in NYC, specializing in modern web development, music production, and photography."
        />
        <meta property="og:title" content="Matt Jaikaran | Software Engineer" />
        <meta
          property="og:description"
          content="Full Stack Software Engineer based in NYC, specializing in modern web development, music production, and photography."
        />
        <meta
          property="og:image"
          content="https://live.staticflickr.com/65535/53419346651_ec2f4bbb3d_h.jpg"
        />
        <meta property="og:image:width" content="2000" />
        <meta property="og:image:height" content="3000" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Matt Jaikaran | Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Full Stack Software Engineer based in NYC, specializing in modern web development, music production, and photography."
        />
        <meta
          name="twitter:image"
          content="https://live.staticflickr.com/65535/53419346651_ec2f4bbb3d_h.jpg"
        />
      </Head>
      <main
        className={`${inter.className} min-h-screen bg-background text-foreground antialiased transition-colors duration-300`}
      >
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
