import styled, { css } from 'styled-components';
import { Container as ContainerBootstrap } from 'react-bootstrap';
import { Row as RowBootstrap } from 'react-bootstrap';
import { Col as ColBootstrap } from 'react-bootstrap';

export const Container = styled(ContainerBootstrap)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: ${theme.spacings.medium} 0;
    background: ${theme.colors.white};
  `}
`;

export const Row = styled(RowBootstrap)``;

export const Col = styled(ColBootstrap)``;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    width: 100%;
    margin: ${theme.spacings.xsmall} 0;
    color: ${theme.colors.white};
  `}
`;
