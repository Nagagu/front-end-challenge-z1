import React from 'react';
import { useAudioManager } from '../../utils/hooks/audioPlayerControllers/useAudioManager';
import { PreviousButton as PreviousButtonDefault } from './styles';

export const PreviousButton = () => {
  const audioManager = useAudioManager();
  return (
    <PreviousButtonDefault onClick={() => audioManager.GoPreviousSong()} />
  );
};
