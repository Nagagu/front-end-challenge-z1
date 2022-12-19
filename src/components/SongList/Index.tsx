import React, { useContext, useEffect } from 'react';
import { InView } from 'react-intersection-observer';
import { AppContext } from '../../context/AppContext';
import { useFetch } from '../../service/songs';
import { SongCard } from '../SongCard/Index';
import { Text } from '../Text';
import { Container } from './styles';

export const SongList = (): JSX.Element => {
  const { searchVal, setSearchVal } = useContext(AppContext);
  const elementsPerPage = 4;
  const { data, fetchMore } = useFetch(searchVal!, elementsPerPage, 0);

  return (
    <Container>
      <Text tag="h1" variant="title2">
        Feature Songs
      </Text>
      {data?.songs.songs.map((song) => {
        return <SongCard key={song.id} song={song} />;
      })}
      {data && (
        <InView
          onChange={async (inView) => {
            // const currentLength = data.songs.songs || 0;
            if (inView) {
              await fetchMore(
                searchVal!,
                elementsPerPage,
                data.songs.songs.length,
              );
            }
          }}
        />
      )}
    </Container>
  );
};
