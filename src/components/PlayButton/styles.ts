import styled from 'styled-components';
import Play from '$/assets/icons/playButton2.svg';
import Pause from '$/assets/icons/pause2.svg';

export const PlayButton = styled(Play)`
  cursor: pointer;
  width: 3.5rem;
  height: 3.5rem;
  margin-top: 0.8rem;
  & path {
    fill: ${({ theme }) => theme.color.white};
  }
  &:hover {
    -ms-transform: scale(1.05); /* IE 9 */
    -webkit-transform: scale(1.05); /* Safari 3-8 */
    transform: scale(1.05);
    filter: drop-shadow(0 0 0.125rem #bf508b);
  }
`;

export const PauseButton = styled(Pause)`
  width: 3.8rem;
  height: 3.8rem;
  margin-top: 0.7rem;
  cursor: pointer;

  & path {
    fill: ${({ theme }) => theme.color.white};
  }
  &:hover {
    -ms-transform: scale(1.05); /* IE 9 */
    -webkit-transform: scale(1.05); /* Safari 3-8 */
    transform: scale(1.05);
    filter: drop-shadow(0 0 0.125rem #bf508b);
  }
`;
