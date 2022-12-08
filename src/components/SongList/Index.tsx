import React from 'react';
import { useFetch } from '../../service/songs';
import { SongCard } from '../SongCard';

export const SongList = (): JSX.Element => {
  const { data } = useFetch();
  console.log(data);
  return (
    <>
      {data?.songs.songs.map((song) => {
        return <SongCard song={song} />;
      })}
    </>
  );
};
