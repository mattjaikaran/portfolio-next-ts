export interface Track {
  id: string;
  title: string;
  artist: string;
  releaseDate: string;
  coverArt: string;
  streamingLinks: {
    spotify?: string;
    appleMusic?: string;
    soundcloud?: string;
  };
  role: string[]; // e.g., ["Producer", "Mixing Engineer", "Songwriter"]
  genre: string[];
  description?: string;
}

export interface MusicProject {
  id: string;
  title: string;
  type: 'Album' | 'EP' | 'Single';
  releaseDate: string;
  coverArt: string;
  tracks: Track[];
  streamingLinks: {
    spotify?: string;
    appleMusic?: string;
    soundcloud?: string;
  };
  role: string[];
  genre: string[];
  description?: string;
}
