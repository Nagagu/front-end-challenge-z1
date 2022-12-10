import styled from 'styled-components';
import { ProgressBar } from '../ProgressSongBar/styles';
import Previous from '$/assets/icons/previous.svg';

export const AudioPlayerContainer = styled.div`
  height: 6rem;
  width: 100%;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.grayscale900};
  //#282858;
  position: fixed;
  display: flex;
  justify-content: space-between;
  border-radius: 1.5rem 1.5rem 0px 0px;
`;
export const SongControllers = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;
  margin-left: 35rem;
`;

// export const ProgressSongBar = styled(ProgressBar)``;

export const BarPlayButton = styled.div``;
