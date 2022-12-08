import styled from 'styled-components';

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
export const SongControllers = styled.div``;
export const ProgressSongBar = styled.div``;

export const MainPlayButton = styled.div``;
export const PrevButton = styled.div``;
export const NextButton = styled.div``;
