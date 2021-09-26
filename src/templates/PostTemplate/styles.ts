import styled, { css } from 'styled-components';
import { Container as ContainerBootstrap } from 'react-bootstrap';
import { Row as RowBootstrap } from 'react-bootstrap';
import { Col as ColBootstrap } from 'react-bootstrap';

export const Container = styled(ContainerBootstrap)`
  ${({ theme }) => css`
    /* display: flex;
    justify-content: space-evenly;
    align-items: flex-start; */
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: 0;
    background: ${theme.colors.white};
  `}
`;

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    justify-content: center;
    text-align: center;
    background: ${theme.colors.primary};
    padding: ${theme.spacings.medium};
  `}
`;

export const TagsContainer = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large};
  `}
`;

export const Row = styled(RowBootstrap)`
  ${({ theme }) => css`
    margin-right: 0;
    margin-left: 0;

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

    @media ${theme.media.large} {
      flex-flow: column-reverse wrap;
      align-content: center;
      width: 100%;
      max-width: 100%;
      margin: auto;
    }
  `}
`;
