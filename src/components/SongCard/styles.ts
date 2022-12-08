import styled from 'styled-components';
import SolidHeart from '$/assets/icons/solid-heart.svg';
import ThinHeart from '$/assets/icons/thin-heart.svg';

export const Container = styled.div`
  margin: 30px 0;
  display: flex;
  grid-template-columns: 190px;
  grid-template-rows: 12em;
  grid-template-areas: 'image text button';
`;

export const CardImage = styled.img`
  grid-area: image;
  border-radius: 15px;
  background-size: cover;
  width: 12em;
  height: 10em;
`;

export const CardTextWrapper = styled.div`
  margin-left: 25px;
  width: 50em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SongDetailsWrapper = styled.div`
  display: flex;
  width: 35%;
  justify-content: space-between;
`;

export const SongDuration = styled.span``;

export const SongGenre = styled.span``;
// export const CardTextTitle = styled.h2`
//   margin-top: 0px;
//   font-size: 1rem;
//   box-sizing: border-box;
//   min-width: 0px;
//   line-height: 1.2;
//   margin: 0px;
//   color: black;
//   /* background: linear-gradient(
//     110.78deg,
//     rgb(118, 230, 80) -1.13%,
//     rgb(249, 214, 73) 15.22%,
//     rgb(240, 142, 53) 32.09%,
//     rgb(236, 81, 87) 48.96%,
//     rgb(255, 24, 189) 67.94%,
//     rgb(26, 75, 255) 85.34%,
//     rgb(98, 216, 249) 99.57%
//   );
//   background-clip: text;
//   -webkit-background-clip: text;
//   color: transparent; */
// `;

export const CardTextAuthor = styled.span`
  color: rgb(255, 7, 110);
  font-size: 13px;
`;

export const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
`;

export const FavButton = styled(SolidHeart)`
  width: 2em;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 0.125rem #bf508b);
  }
`;

export const UnFavButton = styled(ThinHeart)`
  width: 2em;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 0.125rem #bf508b);
  }
`;
export const PlayButton = styled.img`
  display: block;
  width: 3rem;
  height: 3rem;
  margin-left: -5px;
  &:hover {
    -ms-transform: scale(1.05); /* IE 9 */
    -webkit-transform: scale(1.05); /* Safari 3-8 */
    transform: scale(1.05);
    cursor: pointer;
  }
`;
