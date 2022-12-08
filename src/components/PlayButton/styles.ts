import styled from 'styled-components';
import Play from '$/assets/icons/playButton.svg';
export const PlayButton = styled(Play)`
  width: 3em;
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
