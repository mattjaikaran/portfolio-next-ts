import { Release } from '@/data/music';

const ReleaseCard = ({ release }: any) => {
  return (
    <div
      className={`card bg-background text-foreground p-4 ${
        !release.image ? 'shadow' : ''
      } rounded-lg`}
    >
      {release.image ? (
        <img src={release.image} alt={release.title} width={400} height={500} />
      ) : null}
      <h3 className="mt-2">{release.title}</h3>
      <p className="text-sm text-gray-500">{release.year}</p>
      <a
        className="hover:underline"
        href={release.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="mb-0 text-sm">{release.title} on Bandcamp</p>
      </a>
    </div>
  );
};

export default ReleaseCard;
