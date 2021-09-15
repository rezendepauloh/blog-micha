import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from 'components/Heading/styles';

import { Container as ContainerBootstrap } from 'react-bootstrap';
import { Row as RowBootstrap } from 'react-bootstrap';
import { Col as ColBootstrap } from 'react-bootstrap';
import { Button as ButtonBootstrap } from 'react-bootstrap';

export const Container = styled(ContainerBootstrap)`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} 0;

    ${HeadingContainer} {
      margin: ${theme.spacings.small} 0;
      border-bottom: 1px solid ${theme.colors.primary};
      padding-bottom: ${theme.spacings.medium};
      padding-left: 5px;
    }

    /* @media ${theme.media.lteMedium} {
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
    } */

    /* @media ${theme.media.large} {
      flex-flow: column wrap;
      align-content: center;
      width: 100%;
      margin: auto;
    } */
  `}
`;

export const Row = styled(RowBootstrap)`
  ${({ theme }) => css`
    margin-right: 0;
    margin-left: 0;

    /* @media ${theme.media.medium} {
      width: 100%;
      display: flex;
      flex-flow: column wrap;
      align-content: center;
      width: 100%;
      margin: auto;
    } */

    @media ${theme.media.large} {
      flex-flow: column-reverse wrap;
      align-content: center;
      width: 100%;
      max-width: 100%;
      margin: auto;
    }
  `}
`;

export const Col = styled(ColBootstrap)`
  ${({ theme }) => css`
    > h1 > div > img {
      height: 16rem;
      width: 100%;
    }

    /* @media ${theme.media.medium} {
      width: 100%;
      display: flex;
      flex-flow: column wrap;
      align-content: center;
      width: 100%;
      margin: auto;
    }

    @media ${theme.media.lteMedium} {
      width: 100%;
    }*/

    @media ${theme.media.large} {
      flex-flow: column-reverse wrap;
      align-content: center;
      width: 100%;
      max-width: 100%;
      margin: auto;
    }
  `}
`;

export const List = styled.ul`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} 0;

    /* @media ${theme.media.medium} {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: col;
    } */
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
