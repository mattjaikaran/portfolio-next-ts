import { HeadingH3, HeadingH5, Paragraph } from '@/components/typography';

interface Release {
  title: string;
  url: string;
}

interface MusicItem {
  title: string;
  description: string;
  releases?: Release[];
}

interface MusicCardProps {
  item: MusicItem;
}

const MusicCard: React.FC<MusicCardProps> = ({ item }) => {
  return (
    <div className="card bg-white p-4 shadow rounded-lg">
      <HeadingH3 className="mb-0">{item.title}</HeadingH3>
      <small className="text-sm text-gray-500 mt-0">{item.description}</small>
      {item.releases && item.releases.length ? (
        <div>
          <HeadingH5 className="mt-2 mb-0">Releases</HeadingH5>
          <ul>
            {item.releases.map((release) => (
              <li key={release.title} className="mt-0 hover:underline">
                <a href={release.url} target="_blank" rel="noopener noreferrer">
                  <Paragraph className="mb-0 text-sm">{release.title}</Paragraph>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default MusicCard;
