import React from 'react';
import { useAudioManager } from '../../utils/audioPlayerControllers/useAudioManager';

import { PlayButton as PlayButtonDefault } from './styles';

export const PlayButton = () => {
  const audioManager = useAudioManager();
  return <PlayButtonDefault onClick={() => audioManager.PlaySong()} />;
};
