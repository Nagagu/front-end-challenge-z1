import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Song } from '../../service/types';
import { NextButton as NextButtonDefault } from './styles';

export const NextButton = () => {
  const { songsList, playingSong, setPlayingSong } = useContext(AppContext);

  const handleNextSong = () => {
    if (!songsList?.songs?.songs) return;
    const indexOfCurrentSong = songsList?.songs?.songs?.indexOf(
      playingSong as Song,
    );
    const nextSongIndex = indexOfCurrentSong + 1;
    setPlayingSong && setPlayingSong(songsList?.songs?.songs[nextSongIndex]);
  };

  return <NextButtonDefault onClick={handleNextSong} />;
};
