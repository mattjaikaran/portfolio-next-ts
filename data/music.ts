export interface Release {
  id: number;
  title: string;
  url: string;
  image?:  string;
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
        url: 'https://haveyouheard.bandcamp.com/album/where-you-want-me',
      }, 
      {
        id: 2,
        title: 'take.create.revive.',
        url: 'https://haveyouheard.bandcamp.com/album/take-create-revive',
      }
    ],
    urls: [
      'https://haveyouheard.bandcamp.com/album/where-you-want-me', 
      'https://haveyouheard.bandcamp.com/album/take-create-revive'
    ]
  },
  {
    id: 'pocono',
    title: 'Pocono',
    description: 'Guitarist/Songwriter 2013',
    releases: [
      {
        id: 1,
        title: 'Pocono',
        url: 'https://pocono.bandcamp.com/album/pocono',
        image: 'https://f4.bcbits.com/img/a3047471647_16.jpg',
      }
    ]
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
        url: 'https://chapelsmusic.bandcamp.com/',
        image: 'https://f4.bcbits.com/img/a2204902306_16.jpg',
      }
    ]
  },
]

// current projects
// tba, 2024, tbd
// tba2, 2024, tbd
export const currentMusicData: MusicItem[] = [
  {
    id: 'tba',
    title: 'TBA',
    description: '2024',
    longDescription: 'add data for srh tbd',
  },
  // {
  //   id: 'tba2',
  //   title: 'TBA2',
  //   description: '2024',
  //   longDescription: '',
  // },
]



export const musicData: MusicItem[] = [
  {
    id: 'haveyouheard',
    title: 'Have You Heard',
    description: 'Guitarist/Songwriter 2008-2012',
    longDescription: 'add more for hyh tbd',
    releases: [
      {
        title: 'Where You Want Me',
        url: 'https://haveyouheard.bandcamp.com/album/where-you-want-me',
      }, 
      {
        title: 'take.create.revive.',
        url: 'https://haveyouheard.bandcamp.com/album/take-create-revive',
      }
    ],
    urls: [
      'https://haveyouheard.bandcamp.com/album/where-you-want-me', 
      'https://haveyouheard.bandcamp.com/album/take-create-revive'
    ]
  },
  {
    id: 'pocono',
    title: 'Pocono',
    description: 'Guitarist/Songwriter 2013',
    longDescription: 'add more for pocono tbd',
    releases: [
      {
        title: 'Pocono',
        url: 'https://pocono.bandcamp.com/album/pocono',
        image: 'https://f4.bcbits.com/img/a3047471647_16.jpg',
      }
    ]
  },
  {
    id: 'chapels',
    title: 'Chapels',
    description: 'Guitarist/Songwriter 2014-2015',
    longDescription: 'add more for chapels tbd',
    releases: [
      {
        title: 'Chapels',
        url: 'https://chapelsmusic.bandcamp.com/',
        image: 'https://f4.bcbits.com/img/a2204902306_16.jpg',
      }
    ]
  },
  {
    id: 'tba',
    title: 'TBA',
    description: '2024',
    longDescription: 'add more for srh tbd',
  },
]