import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import {
  AudioPlayerContainer,
  MainPlayButton,
  NextButton,
  PrevButton,
  ProgressSongBar,
  SongControllers,
  ThumbnailSong,
} from './styles';

export const AudioPlayer = () => {
  const { playingSong } = useContext(AppContext);
  return (
    <AudioPlayerContainer>
      {/* <ThumbnailSong></ThumbnailSong>
      <SongControllers>
        
        <PrevButton />
        <MainPlayButton />
        <NextButton />
      </SongControllers>
      <ProgressSongBar></ProgressSongBar> */}
      <audio src={playingSong?.audio.url} autoPlay controls></audio>
    </AudioPlayerContainer>
  );
};
