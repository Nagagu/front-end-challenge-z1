import styled from 'styled-components';
import SolidHeart from '$/assets/icons/solid-heart.svg';
import ThinHeart from '$/assets/icons/thin-heart.svg';
export const Container = styled.div`
  display: flex;
  padding: 1.5rem 0.75rem 1rem 2rem;
`;
export const FavButton = styled(SolidHeart)`
  width: 2em;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 0.125rem #bf508b);
  }
`;

export const UnFavButton = styled(ThinHeart)`
  width: 1.8em;
  cursor: pointer;
  & path {
    fill: ${({ theme }) => theme.color.grayscale300};
  }
  &:hover {
    filter: drop-shadow(0 0 0.125rem #bf508b);
  }
`;
