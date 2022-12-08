import React from 'react';
import {
  CardImage,
  CardTextAuthor,
  CardTextBody,
  // CardTextTitle,
  CardTextWrapper,
  Container,
  FavButton,
  PlayButton,
  SongDetailsWrapper,
  SongDuration,
  SongGenre,
  UnFavButton,
} from './styles';
import { SongCardProps } from './types';
import play from '$/assets/play.png';
import { Text } from '../Text';

export const SongCard = ({ song }: SongCardProps): JSX.Element => {
  console.log(song);
  return (
    <Container>
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
          <PlayButton src={play} alt="Z1 Digital Studio" />
          <SongDuration>5 min</SongDuration>
          <SongGenre> {song.genre} </SongGenre>
        </SongDetailsWrapper>
      </CardTextWrapper>
      <UnFavButton />
    </Container>
  );
};
