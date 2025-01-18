interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
  aspectRatio?: string;
}

export const photoData: Photo[] = [
  {
    src: 'https://live.staticflickr.com/65535/54272368629_d1c4f4a40d_h.jpg',
    alt: 'NYC Street Scene',
    width: 2000,
    height: 3000,
    aspectRatio: '2/3',
  },
  {
    src: 'https://live.staticflickr.com/65535/54271233492_70f7d41d9d_h.jpg',
    alt: 'Urban Architecture',
    width: 2000,
    height: 3000,
    aspectRatio: '2/3',
  },
  {
    src: 'https://live.staticflickr.com/65535/53919346651_ec2f4bbb3d_h.jpg',
    alt: 'Grand Central Rain',
    width: 3000,
    height: 2000,
    aspectRatio: '3/2',
  },
  {
    src: 'https://live.staticflickr.com/65535/54272122841_16b6132784_h.jpg',
    alt: 'City Life',
    width: 2000,
    height: 3000,
    aspectRatio: '2/3',
  },
  {
    src: 'https://live.staticflickr.com/65535/53919808175_2e0bddb4fe_h.jpg',
    alt: 'Union Square Kids Bikes',
    width: 2000,
    height: 3000,
    aspectRatio: '2/3',
  },
  {
    src: 'https://live.staticflickr.com/65535/53919798420_5d231120b5_h.jpg',
    alt: 'Union Square Couple',
    width: 2000,
    height: 3000,
    aspectRatio: '2/3',
  },
];

// Featured photos for the home page gallery (subset of photoData)
export const featuredPhotos = photoData.slice(0, 3);

export type { Photo };
