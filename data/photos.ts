// Define types for photo data
export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Photos data
export const photoData: Photo[] = [
  {
    src: 'https://live.staticflickr.com/65535/54271233492_70f7d41d9d_h.jpg',
    alt: 'New York City skyline at sunset',
    width: 2000,
    height: 3000,
  },
  {
    src: 'https://live.staticflickr.com/65535/54271233487_c9e0a7a1f6_h.jpg',
    alt: 'Brooklyn Bridge at night',
    width: 2000,
    height: 1333,
  },
  {
    src: 'https://live.staticflickr.com/65535/54271233482_a5e3f7cdb7_h.jpg',
    alt: 'Central Park in autumn',
    width: 2000,
    height: 1333,
  },
  {
    src: 'https://live.staticflickr.com/65535/54271233477_9a37b8b7e7_h.jpg',
    alt: 'Street photography in Manhattan',
    width: 2000,
    height: 3000,
  },
  {
    src: 'https://live.staticflickr.com/65535/54271233472_4f3ee98b5d_h.jpg',
    alt: 'Architectural detail of NYC building',
    width: 2000,
    height: 1333,
  },
  {
    src: 'https://live.staticflickr.com/65535/54271233467_a5e3f7cdb7_h.jpg',
    alt: 'Sunset over the Hudson River',
    width: 2000,
    height: 1333,
  },
  {
    src: 'https://live.staticflickr.com/65535/54271233462_9a37b8b7e7_h.jpg',
    alt: 'Times Square at night',
    width: 2000,
    height: 3000,
  },
  {
    src: 'https://live.staticflickr.com/65535/54271233457_4f3ee98b5d_h.jpg',
    alt: 'Brooklyn street scene',
    width: 2000,
    height: 1333,
  },
]; 