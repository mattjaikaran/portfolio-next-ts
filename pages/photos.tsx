'use client';
import { NextPage } from 'next';
import { MainLayout } from '@/layouts/MainLayout';
import dynamic from 'next/dynamic';
// import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
const ResponsiveMasonry = dynamic(() => import('react-responsive-masonry'), {
  ssr: false,
});
const Masonry = dynamic(
  () => import('react-responsive-masonry').then(mod => mod.default),
  { ssr: false }
);

const unionSquareCouple =
  'https://live.staticflickr.com/65535/53919798420_6530fb72a4_c.jpg';
const grandCentral =
  'https://live.staticflickr.com/65535/53919346651_3b677ee712_c.jpg';

const unionSquareKidsBikes =
  'https://live.staticflickr.com/65535/53919808175_72ba6cfdf5_c.jpg';

const coffeeShop =
  'https://live.staticflickr.com/65535/53919725454_984722b6d2_c.jpg';

const Photos: NextPage = () => {
  return (
    <MainLayout>
      <div className="container">
        <ResponsiveMasonry columnsCount={1}>
          <Masonry columnsCount={3}>
            <img
              src={unionSquareKidsBikes}
              className="w-100"
              alt={'union square kids bikes'}
            />
            <img
              src={grandCentral}
              className="w-100"
              alt={'grand central rain'}
            />
            <img src={coffeeShop} className="w-100" alt={'coffee shop'} />
            <img
              src={unionSquareCouple}
              className="w-100"
              alt={'union square couple'}
            />
            {/* <img src={coffeeShop} className="w-100" alt={'coffee shop'} /> */}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </MainLayout>
  );
};

export default Photos;
