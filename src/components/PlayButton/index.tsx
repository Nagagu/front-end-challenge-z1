import React from 'react';
import { useAudioManager } from '../../utils/audioPlayerControllers/useAudioManager';

import { PlayButton as PlayButtonDefault } from './styles';
import { PauseButton as PauseButtonDefault } from './styles';

export const PlayButton = () => {
  const audioManager = useAudioManager();
  const handleCanPlaySong = () => {
    audioManager.IsPlayingSong()
      ? audioManager.PauseSong()
      : audioManager.PlaySong();
  };

  return audioManager.IsPlayingSong() ? (
    <PauseButtonDefault onClick={handleCanPlaySong} />
  ) : (
    <PlayButtonDefault onClick={handleCanPlaySong} />
  );
};
