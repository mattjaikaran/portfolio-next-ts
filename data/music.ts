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
}

// Music projects data - ported from portfolio-next-ts
export const musicProjects: MusicProject[] = [
  {
    id: 'haveyouheard',
    title: 'Have You Heard',
    artist: 'Matt Jaikaran',
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
  },
  {
    id: 'pocono',
    title: 'Pocono',
    artist: 'Matt Jaikaran',
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
  },
  {
    id: 'chapels',
    title: 'Chapels',
    artist: 'Matt Jaikaran',
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
  },
  {
    id: 'srh',
    title: 'TBA1',
    artist: 'Matt Jaikaran',
    description: 'Solo Project',
    longDescription: 'New project',
    image: '/images/music/tba1.jpg',
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
