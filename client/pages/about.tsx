import { MainLayout } from '@/layouts/MainLayout';
import { HeadingH1, HeadingH3, Paragraph } from '@/components/typography';

export default function About() {
  return (
    <MainLayout>
      <div className="container">
        <div className="lg:pr-32 xl:pr-64">
          <HeadingH1>About</HeadingH1>
          <Paragraph>
            {`Former touring musician/songwriter/producer turned software engineer.
          I've had an unconventional career path transitioning from the music
          industry specializing in marketing/branding, launching brands, and
          artist management while living in Nashville.`}
          </Paragraph>
          <Paragraph>
            {`Upon moving to NYC 2016, I attended a bootcamp and have gained tons
            of relevant experience and knowledge of the full software
            development/product lifecycle. Most of my engineering experience has
            been within startups, helping SaaS companies launch their product.`}
          </Paragraph>
          <Paragraph>
            {`Most of my experience lies within JavaScript/TypeScript and Python
            using various frameworks but I am continuously learning and
            researching for more optimal solutions to my workflow. I also enjoy
            Bash scripting and building CLIs to speed up development. I am also
            open to freelance projects.`}
          </Paragraph>
          <ul>
            <li>8+ years of software engineering</li>
            <li>14+ years of business/marketing/branding experience </li>
            <li>16+ years of e-commerce experience </li>
            <li>21+ years of music/music production experience</li>
          </ul>
          <div className="mt-4 border-t-2 pb-16 md:pb-0">
            <HeadingH3 className="mt-4">Education</HeadingH3>
            <Paragraph>
              <strong>Belmont University</strong>
              <ul>
                <li>- Music Business (Production)</li>
                <li>- Marketing</li>
              </ul>
            </Paragraph>
            <Paragraph>
              <strong>General Assembly</strong>
              <br />- Software Engineer Immersive
            </Paragraph>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
