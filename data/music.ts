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
  urls?: any;
}

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
      },
      {
        id: 2,
        title: 'take.create.revive.',
        year: 2012,
        url: 'https://haveyouheard.bandcamp.com/album/take-create-revive',
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

// current projects
export const currentMusicData: MusicItem[] = [
  {
    id: 'srh',
    title: 'TBA1',
    description: 'Solo Project 2024',
    longDescription: 'Add more',
    // releases: [
    //   {
    //     id: 1,
    //     title: '',
    //     year: 2024,
    //     url: '',
    //     image: '',
    //   },
    // ],
  },
  {
    id: 'mc',
    title: 'TBA2',
    description: 'Solo Project 2024',
    longDescription: 'Add more',
    // releases: [
    //   {
    //     id: 1,
    //     title: '',
    //     year: 2024,
    //     url: '',
    //     image: '',
    //   },
    // ],
  },
];

export const musicData: MusicItem[] = [
  {
    id: 'haveyouheard',
    title: 'Have You Heard',
    description: 'Guitarist/Songwriter 2008-2012',
    longDescription: 'add more for hyh tbd',
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
    longDescription: 'add more for pocono tbd',
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
    longDescription: 'add more for chapels tbd',
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
    description: 'Solo Project 2024',
    longDescription: 'New project releasing fall 2024',
  },
  {
    id: 'mc',
    title: 'TBA2',
    description: 'Solo Project 2024',
    longDescription: 'Add more for mc',
  },
];
