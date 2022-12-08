import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { ThumbnailSong as ThumbnailSongDefault } from './styles';

import React from 'react';

export const ThumbnailSong = () => {
  const { setPlayingSong, playingSong } = useContext(AppContext);
  return <ThumbnailSongDefault>Hola{playingSong?.name}</ThumbnailSongDefault>;
};
