import styled, { css } from 'styled-components';
// import { CardDeck as CardDeckBootstrap } from 'react-bootstrap';
import { Title as HeadingContainer } from 'components/Heading/styles';
import { Button as ButtonBootstrap } from 'react-bootstrap';

export const Container = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} ${theme.spacings.xsmall};

    ${HeadingContainer} {
      margin: ${theme.spacings.small} 0;
      border-bottom: 1px solid ${theme.colors.primary};
      padding-bottom: ${theme.spacings.medium};
      padding-left: 5px;
    }

    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
      width: 100%;
      margin: auto;
    }

    @media ${theme.media.small} {
      flex-flow: column wrap;
      align-content: center;
      width: 100%;
      margin: ${theme.spacings.xsmall} 0;
    }
  `}
`;

export const List = styled.ul`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} 0;
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: row wrap;
    margin: ${theme.spacings.xsmall} 0;
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
    border-radius: 5px;

    &:hover {
      color: ${theme.colors.secondary};
      background-color: ${theme.colors.white};
      transition: all 300ms ease-in-out;
      border: 1px solid;
    }

    &:focus {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      transition: all 300ms ease-in-out;
      border: 1px solid ${theme.colors.primary};
    }

    &:disabled {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    }
  `}
`;
