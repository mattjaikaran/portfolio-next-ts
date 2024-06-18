import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { MainLayout } from '@/layouts/MainLayout';
import { HeadingH1, Paragraph } from '@/components/shared/typography';
import { Spinner } from '@/components/ui/spinner';
import { Release } from '@/data/music';
import ReleaseCard from '@/components/cards/release-card';
import BackButton from '@/components/shared/back-button';

const MusicProjectDetail: NextPage = () => {
  const router = useRouter();
  const [musicDetail, setMusicDetail] = useState<any>({});

  useEffect(() => {
    const renderMusicData = async () => {
      try {
        const response = await axios.get(`/api/music/${router.query.slug}`);
        console.log('response.data.data', response.data.data);
        setMusicDetail(response.data.data);
        console.log('musicDetail', musicDetail);
        return response;
      } catch (error) {
        console.log('error in renderMusicData ~>', error);
      }
    };
    if (router.query.slug) renderMusicData();
  }, [router.query.slug]);

  return (
    <MainLayout>
      <div className="container mb-4">
        <BackButton route="music" />
      </div>
      {!musicDetail || !musicDetail.title ? (
        <div className="container">
          <div className="flex justify-center items-center h-96">
            <Spinner />
          </div>
        </div>
      ) : (
        <div className="container">
          <HeadingH1>{musicDetail.title}</HeadingH1>
          <p>{musicDetail.description}</p>

          <Paragraph>{musicDetail.longDescription}</Paragraph>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {musicDetail.releases && musicDetail.releases.length > 0
              ? musicDetail.releases.map((release: Release) => (
                  <ReleaseCard key={release.year} release={release} />
                ))
              : null}
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default MusicProjectDetail;
