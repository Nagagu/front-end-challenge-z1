import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { useFetch } from '../../service/songs';
import { SongCard } from '../SongCard/Index';

export const SongList = (): JSX.Element => {
  const { searchVal, setSearchVal } = useContext(AppContext);

  const { data } = useFetch(searchVal as string, 10, 0);
  return (
    <>
      {data?.songs.songs.map((song) => {
        return <SongCard key={song.id} song={song} />;
      })}
    </>
  );
};
