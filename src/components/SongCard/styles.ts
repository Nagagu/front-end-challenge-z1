import styled from 'styled-components';
import play from '$/assets/icons/playButton.svg';
import { Text } from '../Text';

export const Container = styled.div`
  margin: 30px 0;
  display: flex;
  grid-template-columns: 190px;
  grid-template-rows: 12em;
  grid-template-areas: 'image text button';
  justify-content: space-between;
`;

export const CardImage = styled.img`
  grid-area: image;
  border-radius: 15px;
  background-size: cover;
  width: 12em;
  height: 10em;
  object-fit: cover;
`;

export const CardTextWrapper = styled.div`
  margin-left: 25px;
  width: 50em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InfoSongWrapper = styled.div`
  display: flex;
`;

export const SongDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SongDuration = styled(Text)`
  font-size: 0.8rem;
  margin: 0rem 1rem 0.5rem 1rem;
`;

export const SongGenre = styled.span`
  background-color: #b4e6fb82;
  border-radius: 10rem;
  padding: 0rem 0.5rem 0.5rem 0.5rem;
  font-size: 0.8rem;
`;

export const CardTextAuthor = styled.span`
  color: rgb(255, 7, 110);
  font-size: 13px;
`;

export const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
`;

// export const PlayButton = styled.img`
//   display: block;
//   width: 3rem;
//   height: 3rem;
//   margin-left: -5px;

//   &:hover {
//     -ms-transform: scale(1.05); /* IE 9 */
//     -webkit-transform: scale(1.05); /* Safari 3-8 */
//     transform: scale(1.05);
//     cursor: pointer;
//   }
// `;

export const PlayButton = styled(play)`
  width: 2em;
  height: 2em;
  & path {
    fill: ${({ theme }) => theme.color.grayscale900};
  }
  &:hover {
    -ms-transform: scale(1.05); /* IE 9 */
    -webkit-transform: scale(1.05); /* Safari 3-8 */
    transform: scale(1.05);
    cursor: pointer;
  }
`;
