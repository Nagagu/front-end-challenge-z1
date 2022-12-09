import React from 'react';
import { useAudioManager } from '../../utils/audioPlayerControllers/useAudioManager';
import { NextButton as NextButtonDefault } from './styles';

export const NextButton = () => {
  const audioManager = useAudioManager();
  return <NextButtonDefault onClick={() => audioManager.GoNextSong()} />;
};
