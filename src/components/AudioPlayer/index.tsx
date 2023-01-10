import React from 'react';
import { ProgressSongBar } from '$/components/ProgressSongBar';
import { NextButton } from '$/components/NextButton';
import { PreviousButton } from '$/components/PreviousButton';
import { PlayButton as BarPlayButton } from '$/components/PlayButton';
import { AudioPlayerContainer, SongControllers } from './styles';
import { DetailsSong } from '../DetailsSong';

export const AudioPlayer = () => {
  return (
    <AudioPlayerContainer>
      <DetailsSong />
      <SongControllers>
        <PreviousButton />
        <BarPlayButton />
        <NextButton />
      </SongControllers>
      <ProgressSongBar />
    </AudioPlayerContainer>
  );
};
