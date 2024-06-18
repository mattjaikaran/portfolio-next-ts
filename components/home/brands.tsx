/* eslint-disable @next/next/no-img-element */
import { HeadingH3 } from '../shared/typography';
import hubble from '@/public/images/hubble.svg';
import hyvee from '@/public/images/hyvee.png';
import avon from '@/public/images/avon.png';
import gm from '@/public/images/gm.png';
import rewyre from '@/public/images/rewyre-logo.svg';
import spotify from '@/public/images/spotify-green.png';

export default function Brands() {
  return (
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
  );
}
