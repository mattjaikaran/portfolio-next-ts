import { NextPage } from 'next';
import { MainLayout } from '@/layouts/MainLayout';
import { HeadingH1, HeadingH5 } from '@/components/typography';
import { pastMusicData, currentMusicData } from '@/data/music';
import MusicCard from '@/components/music-card';

const Music: NextPage = () => {
  return (
    <MainLayout>
      <div className="container">
        <HeadingH1>Music Projects</HeadingH1>

        <HeadingH5 className="mt-4">Previous Projects</HeadingH5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pastMusicData.map((item) => (
            <MusicCard key={item.id} item={item} />
          ))}
        </div>

        <hr className='my-8' />

        <HeadingH5>Current Projects</HeadingH5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {currentMusicData.map((item) => (
            <MusicCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Music;
