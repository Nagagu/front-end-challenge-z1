import { Data, Song } from '../../service/types';

export type audioManager = {
  GoNextSong: () => void;
  GoPreviousSong: () => void;
  PlaySong: () => void;
  PauseSong: () => void;
  IsPlayingSong: () => boolean;
  GetDuration: () => number;
  playingSong?: Song | undefined;
  setPlayingSong?: (song: Song | undefined) => void;
  songsList?: Data;
  setSongsList?: (songsList: Data | undefined) => void;
  audioRef?: React.MutableRefObject<HTMLAudioElement | undefined>;
};
