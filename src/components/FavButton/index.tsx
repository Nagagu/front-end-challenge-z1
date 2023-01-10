import { useEffect, useState } from 'react';
import {
  Container,
  UnFavButton,
  FavButton as FavButtonDefault,
} from './styles';

import React from 'react';
import { FavButtonProps } from './types';
import { getFavourites } from '../../utils/utilsFunctions/getFavourites';

export const FavButton = ({ song }: FavButtonProps) => {
  const [isFavourite, setIsFavourite] = useState(
    getFavourites().includes(song.id),
  );
  const handleSaveFavouriteSong = () => {
    setIsFavourite(!isFavourite);
  };
  console.log(song.name + ' --> ' + isFavourite);
  useEffect(() => {
    let favourites = getFavourites();
    if (isFavourite && !favourites.includes(song.id)) {
      favourites.push(song.id);
    } else if (!isFavourite) {
      favourites = favourites.filter((o) => o !== song.id);
    }
    localStorage.setItem('favouriteSong', JSON.stringify(favourites));
  }, [isFavourite]);

  return (
    <Container onClick={handleSaveFavouriteSong}>
      {isFavourite ? <FavButtonDefault /> : <UnFavButton />}
    </Container>
  );
};
