/* eslint-disable @next/next/no-img-element */
import { HeadingH1, HeadingH3, Paragraph } from '@/components/typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { siteConfig } from '@/config/site';
import { MainLayout } from '@/layouts/MainLayout';
import { useRouter } from 'next/router';
import birds from '@/assets/images/birds.jpg';
import pages from '@/assets/images/jj-ying-WmnsGyaFnCQ-unsplash.jpg';
import texture1 from '@/assets/images/pawel-czerwinski-HbcfaO4m03s-unsplash.jpg';
import hubble from '@/assets/images/hubble.svg';
import hyvee from '@/assets/images/hyvee.png';
import avon from '@/assets/images/avon.png';
import gm from '@/assets/images/gm.png';
import rewyre from '@/assets/images/rewyre-logo.svg';
import spotify from '@/assets/images/spotify-green.png';

export default function Home() {
  const router = useRouter();
  return (
    <MainLayout>
      <div className="container-fluid xl:container">
        <div className="px-16 py-32 md:p-64 text-center heroImg">
          <HeadingH1 className="text-foreground">Matt Jaikaran</HeadingH1>
          <Paragraph className="text-foreground">
            {siteConfig.description}
          </Paragraph>
          <Button
            variant="outline"
            className="bg-foreground text-background"
            onClick={() => router.push('/portfolio')}
          >
            View Portfolio
          </Button>
        </div>
        {/* <div className="p-8 md:p-24 lg:p-32 bg-foreground text-background md:px-64 md:py-32 text-center">
          <HeadingH3>Title</HeadingH3>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </Paragraph>
          <Button variant="outline" className="text-foreground">
            See More
          </Button>
        </div> */}
        <img src={pages.src} alt="img" className="sm:hidden" />
        {/* <div className="bg-foreground text-background p-24 text-center">
          <HeadingH3>what up</HeadingH3>
          <Button variant="outline" className="bg-foreground text-background">
            Click Here
          </Button>
        </div> */}
        {/* <img className="sm:hidden" src={texture1.src} alt="img" /> */}
        <div className="p-16 md:p-32 bg-white border-t-2 text-center">
          <HeadingH3 className="text-black">{`Brands I've worked with`}</HeadingH3>
          <div className="mt-12 lg:ml-32 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            <a href="https://rewyre.com" target="__blank">
              <img
                className="w-64 mt-4 md:mt-8 lg:mt-6"
                src={rewyre.src}
                alt="rewyre"
              />
            </a>
            <a href="https://spotify.com" target="__blank">
              <img
                className="w-64 mt-8 md:mt-4 lg:mt-0"
                src={spotify.src}
                alt="spotify"
              />
            </a>
            <a href="https://hubblecontacts.com" target="__blank">
              <img
                className="w-64 mt-8 md:mt-14 lg:mt-14"
                src={hubble.src}
                alt="hubble"
              />
            </a>
            <a href="https://avon.com" target="__blank">
              <img className="w-64" src={avon.src} alt="avon" />
            </a>
            <a href="https://www.hy-vee.com/" target="__blank">
              <img
                className="w-64 mt-4 md:mt-6 lg:mt-6"
                src={hyvee.src}
                alt="hyvee"
              />
            </a>
            <a href="https://gm.com" target="__blank">
              <img
                className="w-32 mt-8 md:mt-0 ml-16 md:ml-16"
                src={gm.src}
                alt="gm"
              />
            </a>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          <div className="p-24 text-center">
            <HeadingH3>Some Title</HeadingH3>
            <Paragraph>here is a one liner</Paragraph>
            <Button variant="outline" onClick={() => router.push('/portfolio')}>
              View Details
            </Button>
          </div>
          <div className="p-24 bg-foreground text-center">
            <HeadingH3 className="text-background">hell yeah</HeadingH3>
            <Paragraph className="text-background">
              this isnt done yet so ur cool if ur seeing this
            </Paragraph>
            <Button
              variant="outline"
              className="bg-foreground text-background"
              onClick={() => router.push('/portfolio')}
            >
              View Details
            </Button>
          </div>
        </div>
         */}
        <img src={birds.src} alt="img" className="sm:hidden" />
        {/* newsletter */}
        <div className="p-16 md:px-64 md:py-32 text-center border-t-2">
          <HeadingH3>Want to collaborate on a project?</HeadingH3>
          <Button
            variant="outline"
            className="bg-foreground text-background"
            onClick={() => router.push('/contact')}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
