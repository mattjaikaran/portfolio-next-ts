import { NextPage } from 'next';
import { MainLayout } from '@/layouts/MainLayout';
// import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

// test imgs
import midtown34th from '@/public/images/photos/midtown34th.jpg';
import grandCentral from '@/public/images/photos/grand-central-rain.jpg';

const Photography: NextPage = () => {
  return (
    <MainLayout>
      <div className="container">
        <h1>Photography</h1>
        <p>will add</p>
        {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          <img src={midtown34th.src} className="w-100" alt={'midtown'} />
          <img src={grandCentral.src} className="w-100" alt={'midtown'} />
          <img src={midtown34th.src} className="w-100" alt={'midtown'} />
        </div> */}
      </div>
    </MainLayout>
  );
};

export default Photography;
