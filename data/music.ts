// Define types for music data
export interface Credit {
  role: string;
  name: string;
}

export interface Track {
  title: string;
  duration?: string;
}

export interface Highlight {
  title: string;
  description: string;
}

// Legacy interfaces for backward compatibility
export interface Release {
  id: number;
  title: string;
  year: number;
  url: string;
  image?: string;
}

export interface MusicItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  releases?: Release[];
  image?: string;
  urls?: string[];
}

export interface MusicProject {
  id: string;
  title: string;
  artist: string;
  description: string;
  longDescription?: string;
  image: string;
  coverArt?: string;
  streamingUrl: string;
  externalUrl?: string;
  tags: string[];
  date: string;
  year?: string;
  role?: string;
  slug: string;
  credits?: Credit[];
  tracks?: Track[];
  highlights?: Highlight[];
  releases?: Release[];
}

// Music projects data - ported from portfolio-next-ts
export const musicProjects: MusicProject[] = [
  {
    id: 'haveyouheard',
    title: 'Have You Heard',
    artist: 'Have You Heard',
    description: 'Guitarist/Songwriter 2008-2012',
    longDescription:
      'Have You Heard was a pop rock band from 2008-2012 based in Nashville, TN.',
    image: 'https://f4.bcbits.com/img/a4242374142_10.jpg',
    streamingUrl: 'https://haveyouheard.bandcamp.com/album/where-you-want-me',
    tags: ['Pop Rock', 'Nashville', 'Band'],
    date: '2008-2012',
    year: '2008-2012',
    role: 'Guitarist/Songwriter',
    slug: 'haveyouheard',
    releases: [
      {
        id: 1,
        title: 'Where You Want Me',
        year: 2010,
        url: 'https://haveyouheard.bandcamp.com/album/where-you-want-me',
        image: 'https://f4.bcbits.com/img/a4242374142_10.jpg',
      },
      {
        id: 2,
        title: 'take.create.revive.',
        year: 2011,
        url: 'https://haveyouheard.bandcamp.com/album/take-create-revive',
        image: 'https://f4.bcbits.com/img/a1910409234_16.jpg',
      },
    ],
  },
  {
    id: 'pocono',
    title: 'Pocono',
    artist: 'Pocono',
    description: 'Guitarist/Songwriter 2013',
    longDescription:
      'Pocono was an indie rock band from 2013-2015 based in Nashville, TN.',
    image: 'https://f4.bcbits.com/img/a3047471647_16.jpg',
    streamingUrl: 'https://pocono.bandcamp.com/album/pocono',
    tags: ['Indie Rock', 'Nashville', 'Band'],
    date: '2013',
    year: '2013',
    role: 'Guitarist/Songwriter',
    slug: 'pocono',
    releases: [
      {
        id: 1,
        title: 'Pocono EP',
        year: 2013,
        url: 'https://pocono.bandcamp.com/album/pocono',
        image: 'https://f4.bcbits.com/img/a3047471647_16.jpg',
      },
    ],
  },
  {
    id: 'chapels',
    title: 'Chapels',
    artist: 'Chapels',
    description: 'Guitarist/Songwriter 2014-2015',
    longDescription:
      'Chapels was an indie rock band from 2014-2015 based in Nashville, TN.',
    image: 'https://f4.bcbits.com/img/a2204902306_16.jpg',
    streamingUrl: 'https://chapelsmusic.bandcamp.com/',
    tags: ['Indie Rock', 'Nashville', 'Band'],
    date: '2014-2015',
    year: '2014-2015',
    role: 'Guitarist/Songwriter',
    slug: 'chapels',
    releases: [
      {
        id: 1,
        title: 'Chapels EP',
        year: 2015,
        url: 'https://chapelsmusic.bandcamp.com/',
        image: 'https://f4.bcbits.com/img/a2204902306_16.jpg',
      },
    ],
  },
  {
    id: 'srh',
    title: 'TBA1',
    artist: 'TBA',
    description: 'Solo Project',
    longDescription: 'New project coming soon.',
    image: 'https://dummyimage.com/600x600/1a1a1a/666666&text=Coming+Soon',
    streamingUrl: '#',
    tags: ['Solo', 'Upcoming', 'TBA'],
    date: '2026',
    year: '2026',
    role: 'Solo Artist',
    slug: 'srh',
  },
];

// Legacy data for backward compatibility
export const pastMusicData: MusicItem[] = [
  {
    id: 'haveyouheard',
    title: 'Have You Heard',
    description: 'Guitarist/Songwriter 2008-2012',
    releases: [
      {
        id: 1,
        title: 'Where You Want Me',
        year: 2010,
        url: 'https://haveyouheard.bandcamp.com/album/where-you-want-me',
        image: 'https://f4.bcbits.com/img/a4242374142_10.jpg',
      },
      {
        id: 2,
        title: 'take.create.revive.',
        year: 2011,
        url: 'https://haveyouheard.bandcamp.com/album/take-create-revive',
        image: 'https://f4.bcbits.com/img/a1910409234_16.jpg',
      },
    ],
    urls: [
      'https://haveyouheard.bandcamp.com/album/where-you-want-me',
      'https://haveyouheard.bandcamp.com/album/take-create-revive',
    ],
  },
  {
    id: 'pocono',
    title: 'Pocono',
    description: 'Guitarist/Songwriter 2013',
    releases: [
      {
        id: 1,
        title: 'Pocono',
        year: 2013,
        url: 'https://pocono.bandcamp.com/album/pocono',
        image: 'https://f4.bcbits.com/img/a3047471647_16.jpg',
      },
    ],
  },
  {
    id: 'chapels',
    title: 'Chapels',
    description: 'Guitarist/Songwriter 2014-2015',
    longDescription: '',
    releases: [
      {
        id: 1,
        title: 'Chapels',
        year: 2015,
        url: 'https://chapelsmusic.bandcamp.com/',
        image: 'https://f4.bcbits.com/img/a2204902306_16.jpg',
      },
    ],
  },
];

// Current projects
export const currentMusicData: MusicItem[] = [
  {
    id: 'srh',
    title: 'TBA1',
    description: 'Solo Project 2025',
    longDescription: 'New project releasing 2025',
  },
];

// Combined music data
export const musicData: MusicItem[] = [
  {
    id: 'haveyouheard',
    title: 'Have You Heard',
    description: 'Guitarist/Songwriter 2008-2012',
    longDescription:
      'Have You Heard was a pop rock band from 2008-2012 based in Nashville, TN.',
    releases: [
      {
        id: 1,
        title: 'Where You Want Me',
        year: 2010,
        url: 'https://haveyouheard.bandcamp.com/album/where-you-want-me',
        image: 'https://f4.bcbits.com/img/a4242374142_10.jpg',
      },
      {
        id: 2,
        title: 'take.create.revive.',
        year: 2011,
        url: 'https://haveyouheard.bandcamp.com/album/take-create-revive',
        image: 'https://f4.bcbits.com/img/a1910409234_16.jpg',
      },
    ],
    urls: [
      'https://haveyouheard.bandcamp.com/album/where-you-want-me',
      'https://haveyouheard.bandcamp.com/album/take-create-revive',
    ],
  },
  {
    id: 'pocono',
    title: 'Pocono',
    description: 'Guitarist/Songwriter 2013',
    longDescription:
      'Pocono was an indie rock band from 2013-2015 based in Nashville, TN.',
    releases: [
      {
        id: 1,
        title: 'Pocono',
        year: 2013,
        url: 'https://pocono.bandcamp.com/album/pocono',
        image: 'https://f4.bcbits.com/img/a3047471647_16.jpg',
      },
    ],
  },
  {
    id: 'chapels',
    title: 'Chapels',
    description: 'Guitarist/Songwriter 2014-2015',
    longDescription:
      'Chapels was an indie rock band from 2014-2015 based in Nashville, TN.',
    releases: [
      {
        id: 1,
        title: 'Chapels',
        year: 2015,
        url: 'https://chapelsmusic.bandcamp.com/',
        image: 'https://f4.bcbits.com/img/a2204902306_16.jpg',
      },
    ],
  },
  {
    id: 'srh',
    title: 'TBA1',
    description: 'Solo Project 2025',
    longDescription: 'New project releasing 2025',
  },
];
