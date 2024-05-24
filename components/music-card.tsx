import { MusicItem, Release } from '@/data/music';
import { useRouter } from 'next/router';

interface MusicCardProps {
  item: MusicItem;
}

const MusicCard: React.FC<MusicCardProps> = ({ item }) => {
  const router = useRouter()
  return (
    <div className="card bg-white p-4 shadow rounded-lg">
      <h3 className="text-lg" onClick={() => router.push(`/music/${item.id}`)}>{item.title}</h3>
      <small className="text-sm text-gray-500 mt-0">{item.description}</small>
      {item.releases && item.releases.length ? (
        <div>
          <h4 className="mt-2 text-lg">Releases</h4>
          <ul>
            {item.releases.map((release: Release) => (
              <li key={release.title} className="mt-0 hover:underline">
                <a href={release.url} target="_blank" rel="noopener noreferrer">
                  <p className="mb-0 text-sm">{release.title}</p>
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
