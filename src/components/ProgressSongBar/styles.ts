import styled from 'styled-components';
import SolidHeart from '$/assets/icons/solid-heart.svg';
import ThinHeart from '$/assets/icons/thin-heart.svg';
import play from '$/assets/icons/playButton.svg';
import { Text } from '../Text';

export const Container = styled.div`
  display: flex;
`;

export const ProgressBar = styled.input`
  display: flex;
  left: 74rem;

  margin: 3.2rem 2.8rem;
  width: 40rem;
  height: 0.3rem;
`;

export const Duration = styled.div`
  color: white;
  align-self: center;
  display: flex;
`;
