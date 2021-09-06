import styled, { css } from 'styled-components';
import { Container as ContainerBootstrap } from 'react-bootstrap';
import { Row as RowBootstrap } from 'react-bootstrap';
import { Col as ColBootstrap } from 'react-bootstrap';

import { Title as HeadingContainer } from 'components/Heading/styles';

export const Container = styled(ContainerBootstrap)`
  ${({ theme }) => css`
    /* display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    top: 0;
    left: 0;
    right: 0;
    width: 100%; */
    padding: ${theme.spacings.medium} 0;
    background: ${theme.colors.primary};
  `}

  &.aboutFooter {
    padding: 0;
  }
`;

export const Row = styled(RowBootstrap)``;

export const Col = styled(ColBootstrap)`
  ${({ theme }) => css`
    margin: inherit;
    > img {
      width: 100%;
      border-radius: ${theme.spacings.xsmall};
      border: 2px solid ${theme.colors.primary};
    }

    > img:hover {
      border: 2px solid ${theme.colors.secondary};
      background-position: center;
      background-size: cover;
      filter: grayscale(40%);
      transition: all 300ms ease-in-out;
    }

    ${HeadingContainer} {
      margin: 0;
    }
  `}
`;

export const Paragraph = styled.div`
  ${({ theme }) => css`
    max-width: 100%;
    margin: ${theme.spacings.xsmall} ${theme.spacings.medium};
    color: ${theme.colors.white};
    text-align: justify;
    line-height: ${theme.spacings.medium};

    > p {
      margin: ${theme.spacings.medium} 0;
      color: ${theme.colors.white};
    }

    @media ${theme.media.lteMedium} {
    }

    @media ${theme.media.small} {
    }
  `}
`;

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: row wrap;
    margin: ${theme.spacings.xsmall} 0;

    ${HeadingContainer} {
      margin: ${theme.spacings.xsmall} 0;
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

export const LinkSocial = styled.a`
  ${({ theme }) => css`
    display: flex;
    justify-content: left;
    align-items: flex-start;
    top: 0;
    left: 0;
    right: 0;

    width: 100%;
    color: ${theme.colors.secondary};
    text-decoration: none;
    margin: ${theme.spacings.xsmall};
    font-weight: bold;

    & > .instaAbout {
      padding: 0;
    }

    //Entender melhor o content para poder adicionar os espacos
    > svg::before {
      content: 's';
    }

    &:hover {
      color: ${theme.colors.white};
      transition: all 300ms ease-in-out;
    }

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  `}
`;
