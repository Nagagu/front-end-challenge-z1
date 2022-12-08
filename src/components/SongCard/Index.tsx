import React from 'react';
import { SongCardProps } from './types';

export const SongCard = ({ song }: SongCardProps): JSX.Element => {
  debugger;
  console.log(song);
  return <div>{song.id}</div>;
};
