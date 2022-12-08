import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { ProgressSongBar } from '$/components/ProgressSongBar';
import { NextButton } from '$/components/NextButton';
import { PreviousButton } from '$/components/PreviousButton';
import { PlayButton as BarPlayButton } from '$/components/PlayButton';
import { AudioPlayerContainer, SongControllers, ThumbnailSong } from './styles';

export const AudioPlayer = () => {
  const { playingSong } = useContext(AppContext);
  return (
    <AudioPlayerContainer>
      <ThumbnailSong />
      <SongControllers>
        <PreviousButton />
        <BarPlayButton />
        <NextButton />
      </SongControllers>
      <ProgressSongBar />
      {/* <audio src={playingSong?.audio.url} autoPlay controls></audio> */}
    </AudioPlayerContainer>
  );
};
