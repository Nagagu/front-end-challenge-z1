import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Container, SongInfo, SongName, Thumbnail } from './styles';

import React from 'react';

import { Text } from '$/components/Text';

export const DetailsSong = () => {
  const { setPlayingSong, playingSong } = useContext(AppContext);
  return (
    <Container>
      <Thumbnail src={playingSong?.image} alt="Song Image" />
      <SongInfo>
        <SongName tag="p" variant="captionBold">
          <>{playingSong?.name}</>
        </SongName>
        {/* <Text tag="p" variant="caption">
          <>{playingSong?.author}</>
        </Text> */}
      </SongInfo>
    </Container>
  );
};
