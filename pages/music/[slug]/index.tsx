// @next/next/no-img-element
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { MainLayout } from '@/layouts/MainLayout';
import { Paragraph } from '@/components/shared/typography';
import { Spinner } from '@/components/ui/spinner';
import { Release } from '@/data/music';
import ReleaseCard from '@/components/cards/release-card';
import BackButton from '@/components/shared/back-button';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Disc3, Globe, Link2, Music2 } from 'lucide-react';

const MusicProjectDetail: NextPage = () => {
  const router = useRouter();
  const [musicDetail, setMusicDetail] = useState<any>({});

  useEffect(() => {
    const renderMusicData = async () => {
      try {
        const response = await axios.get(`/api/music/${router.query.slug}`);
        setMusicDetail(response.data.data);
        return response;
      } catch (error) {
        console.log('error in renderMusicData ~>', error);
      }
    };
    if (router.query.slug) renderMusicData();
  }, [router.query.slug]);

  if (!musicDetail || !musicDetail.title) {
    return (
      <MainLayout>
        <div className="container">
          <div className="flex justify-center items-center h-96">
            <Spinner />
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <BackButton route="music" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12 mt-8"
        >
          {/* Hero Section */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            {musicDetail.image ? (
              <img
                src={musicDetail.image}
                alt={musicDetail.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 dark:from-purple-900/30 dark:to-blue-900/30" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {musicDetail.title}
              </h1>
              <p className="text-xl text-white/80 max-w-2xl">
                {musicDetail.description}
              </p>
              {/* Quick Stats */}
              <div className="flex gap-4 mt-6">
                {musicDetail.releases && (
                  <div className="flex items-center text-white/90">
                    <Disc3 className="w-4 h-4 mr-2" />
                    <span>{musicDetail.releases.length} Releases</span>
                  </div>
                )}
                {musicDetail.year && (
                  <div className="flex items-center text-white/90">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    <span>{musicDetail.year}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left Column: About & Details */}
            <div className="md:col-span-2 space-y-8">
              {/* About Section */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold">About the Project</h2>
                <div className="prose dark:prose-invert">
                  <Paragraph>
                    {musicDetail.longDescription || musicDetail.description}
                  </Paragraph>
                </div>
              </section>

              {/* Project Details */}
              {(musicDetail.genre || musicDetail.type || musicDetail.links) && (
                <section className="space-y-6">
                  <h2 className="text-2xl font-bold">Project Details</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {musicDetail.genre && (
                      <div className="flex items-start gap-3">
                        <Music2 className="w-5 h-5 mt-1 text-muted-foreground" />
                        <div>
                          <h3 className="font-medium">Genre</h3>
                          <p className="text-muted-foreground">
                            {Array.isArray(musicDetail.genre)
                              ? musicDetail.genre.join(', ')
                              : musicDetail.genre}
                          </p>
                        </div>
                      </div>
                    )}
                    {musicDetail.type && (
                      <div className="flex items-start gap-3">
                        <Globe className="w-5 h-5 mt-1 text-muted-foreground" />
                        <div>
                          <h3 className="font-medium">Type</h3>
                          <p className="text-muted-foreground">
                            {musicDetail.type}
                          </p>
                        </div>
                      </div>
                    )}
                    {musicDetail.links && (
                      <div className="flex items-start gap-3">
                        <Link2 className="w-5 h-5 mt-1 text-muted-foreground" />
                        <div>
                          <h3 className="font-medium">Links</h3>
                          <div className="space-y-1">
                            {Object.entries(musicDetail.links).map(
                              ([platform, url]) => (
                                <a
                                  key={platform}
                                  href={url as string}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block text-sm text-muted-foreground hover:text-primary"
                                >
                                  {platform.charAt(0).toUpperCase() +
                                    platform.slice(1)}
                                </a>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              )}
            </div>

            {/* Right Column: Releases */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Releases</h2>
              {musicDetail.releases && musicDetail.releases.length > 0 ? (
                <div className="space-y-4">
                  {musicDetail.releases.map((release: Release) => (
                    <motion.div
                      key={release.year}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                    >
                      <ReleaseCard release={release} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No releases available.</p>
              )}

              {/* Tags/Categories */}
              {musicDetail.tags && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {musicDetail.tags.map((tag: string) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default MusicProjectDetail;
