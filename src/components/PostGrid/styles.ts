import styled, { css } from 'styled-components';
import { CardDeck as CardDeckBootstrap } from 'react-bootstrap';
import { Title as HeadingContainer } from 'components/Heading/styles';
import { Button as ButtonBootstrap } from 'react-bootstrap';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: row wrap;
    margin: ${theme.spacings.xsmall} 0;

    ${HeadingContainer} {
      margin: ${theme.spacings.xsmall} 0;
      font-weight: bold;
    }

    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
      width: 100%;
      margin: auto;
    }

    @media ${theme.media.xxsmall} {
      ${HeadingContainer} {
        margin: ${theme.spacings.small} 0;
        font-weight: bold;
        font-size: ${theme.font.sizes.medium};
      }
    }

    @media ${theme.media.small} {
      flex-flow: column wrap;
      align-content: center;
      width: 100%;
      margin: ${theme.spacings.xsmall} 0;

      ${HeadingContainer} {
        margin: ${theme.spacings.xsmall} 0;
        font-weight: bold;
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`;

export const CardDeck = styled(CardDeckBootstrap)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: ${theme.spacings.medium} 0;

    > .card {
      flex: 0 0 23.333%;
      margin-bottom: ${theme.spacings.small};
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-flow: column wrap;
      align-content: center;
      width: 100%;
      margin: auto;
    }
  `}
`;

export const Button = styled(ButtonBootstrap)`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    text-align: center;
    font-size: ${theme.spacings.small};
    padding: ${theme.spacings.small};
    text-decoration: none;
    font-weight: bold;
    border: 1px solid;
    border-radius: ${theme.radius.default};

    &:hover {
      color: ${theme.colors.secondary};
      background-color: ${theme.colors.white};
      transition: all 300ms ease-in-out;
      border: 1px solid;
    }

    @media ${theme.media.xxsmall} {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`;
