import styled from 'styled-components';
import { ProgressBar } from '../ProgressSongBar/styles';
import Previous from '$/assets/icons/previous.svg';

export const AudioPlayerContainer = styled.div`
  height: 5rem;
  width: 100vw;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.grayscale900};
  //#282858;
  position: fixed;
  display: flex;
  border-radius: 1.5rem 1.5rem 0px 0px;
`;

export const ThumbnailSong = styled.img``;
export const SongControllers = styled.div`
  position: relative;
  left: 50rem;
  width: 10rem;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

// export const ProgressSongBar = styled(ProgressBar)``;

export const BarPlayButton = styled.div``;
