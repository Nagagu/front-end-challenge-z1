import React from 'react';
import {
  CardImage,
  CardTextAuthor,
  CardTextBody,
  // CardTextTitle,
  CardTextWrapper,
  Container,
  InfoSongWrapper,
  PlayButton,
  SongDetailsWrapper,
  SongDuration,
  SongGenre,
} from './styles';
import { SongCardProps } from './types';
import { useContext } from 'react';
import play from '$/assets/play.png';
import { Text } from '../Text';
import { AppContext } from '../../context/AppContext';
import { FavButton } from '../FavButton';

export const SongCard = ({ song }: SongCardProps): JSX.Element => {
  const { setPlayingSong } = useContext(AppContext);
  const handleOpenAudioPlayer = () => {
    setPlayingSong && setPlayingSong(song);
  };

  return (
    <Container>
      <InfoSongWrapper>
        <CardImage src={song.image} />
        <CardTextWrapper>
          <Text tag="span" variant="bodyBold">
            {song.name}
          </Text>
          {/* <CardTextTitle> {song.name}</CardTextTitle> */}
          {/* <CardTextAuthor> {song.author.name} </CardTextAuthor> */}
          {/* <CardTextBody> {song.description} </CardTextBody> */}
          <Text tag="span" variant="body">
            {song.author.name}
          </Text>
          <Text tag="span" variant="body2">
            {song.description}
          </Text>
          <SongDetailsWrapper>
            <PlayButton onClick={handleOpenAudioPlayer} />
            <SongDuration tag="span" variant="caption">
              5 min
            </SongDuration>
            <SongGenre>
              {' '}
              {song.genre.charAt(0).toUpperCase() +
                song.genre.slice(1).toLowerCase().replace('_', ' ')}
            </SongGenre>
          </SongDetailsWrapper>
        </CardTextWrapper>
      </InfoSongWrapper>
      <FavButton song={song} />
    </Container>
  );
};
