import { Metadata } from 'next';
import { ThankYouClient } from './thank-you-client';

export const metadata: Metadata = {
  title: 'Thank You | Matt Jaikaran',
  description: 'Thank you for reaching out. I will get back to you soon.',
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
