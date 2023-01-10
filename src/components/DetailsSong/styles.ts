import styled from 'styled-components';
import { Text } from '../Text';
export const Container = styled.div`
  display: flex;
  padding: 1.5rem 0.75rem 1rem 2rem;
`;
export const Thumbnail = styled.img`
  width: 4.2rem;
  height: 4rem;

  object-fit: cover;
  border-radius: 1rem;
  margin-inline-end: 0.5rem;
`;

export const SongInfo = styled.div``;
export const SongName = styled(Text)`
  color: white;
  margin-left: 1rem;
`;

export const SongAuthor = styled.div``;
