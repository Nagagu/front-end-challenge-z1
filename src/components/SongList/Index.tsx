import React from 'react';
import { useFetch } from '../../service/songs';
import { SongCard } from '../SongCard';

export const SongList = (): JSX.Element => {
  const { data } = useFetch();
  return (
    <>
      {data?.songs.songs.map((song) => {
        return <SongCard key={song.id} song={song} />;
      })}
    </>
  );
};
