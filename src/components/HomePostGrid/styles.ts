import styled, { css } from 'styled-components';
import { CardDeck as CardDeckBootstrap } from 'react-bootstrap';

export const CardDeck = styled(CardDeckBootstrap)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: row wrap;
    margin: ${theme.spacings.medium} 0;

    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
      width: 100%;
      margin: auto;
    }
  `}
`;
