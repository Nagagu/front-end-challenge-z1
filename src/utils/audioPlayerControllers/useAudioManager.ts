import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Song } from '../../service/types';

export const useAudioManager = () => {
  const { songsList, playingSong, setPlayingSong } = useContext(AppContext);
  const { audioRef } = useContext(AppContext);

  const GoNextSong = () => {
    if (!songsList?.songs?.songs) return;
    const indexOfCurrentSong = songsList?.songs?.songs?.indexOf(
      playingSong as Song,
    );
    const nextSongIndex = indexOfCurrentSong + 1;
    setPlayingSong && setPlayingSong(songsList?.songs?.songs[nextSongIndex]);
  };
  const GoPreviousSong = () => {
    if (!songsList?.songs?.songs) return;
    const indexOfCurrentSong = songsList?.songs?.songs?.indexOf(playingSong!);
    const previousSongIndex = indexOfCurrentSong - 1;
    setPlayingSong &&
      setPlayingSong(songsList?.songs?.songs[previousSongIndex]);
  };

  const PlaySong = () => {
    audioRef?.current?.play && audioRef.current?.play();
  };

  const PauseSong = () => {
    audioRef?.current?.pause && audioRef.current?.pause();
  };

  const IsPlayingSong = () => !audioRef?.current?.paused;

  return { GoNextSong, GoPreviousSong, PlaySong, PauseSong, IsPlayingSong };
};
