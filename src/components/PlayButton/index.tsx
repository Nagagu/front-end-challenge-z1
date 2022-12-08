import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Song } from '../../service/types';
import { PlayButton as PlayButtonDefault } from './styles';

export const PlayButton = () => {
  const { setPlayingSong, playingSong, audioRef } = useContext(AppContext);

  const audioRef2 = audioRef as any;
  return (
    <PlayButtonDefault
      onClick={() => audioRef2?.current?.play && audioRef2?.current?.play()}
    />
  );
};
