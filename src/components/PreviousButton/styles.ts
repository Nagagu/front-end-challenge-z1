import styled from 'styled-components';
import Previous from '$/assets/icons/previous.svg';
export const PreviousButton = styled(Previous)`
  width: 1.5em;
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
