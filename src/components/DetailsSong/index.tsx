import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Container, SongInfo, SongName, Thumbnail } from './styles';

import React from 'react';
export const DetailsSong = () => {
  const { playingSong } = useContext(AppContext);
  return (
    <Container>
      <Thumbnail src={playingSong?.image} alt="Song Image" />
      <SongInfo>
        <SongName tag="span" variant="body">
          <>{playingSong?.name}</>
        </SongName>

        <SongName tag="p" variant="body2">
          <>{playingSong?.author.name}</>
        </SongName>
      </SongInfo>
    </Container>
  );
};
