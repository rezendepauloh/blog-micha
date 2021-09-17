import styled, { css } from 'styled-components';

import { Button as ButtonBootstrap } from 'react-bootstrap';
import { Container as ContainerBootstrap } from 'react-bootstrap';
import { Row as RowBootstrap } from 'react-bootstrap';
import { Col as ColBootstrap } from 'react-bootstrap';

// import { Title as HeadingContainer } from 'components/Heading/styles';

export const Container = styled(ContainerBootstrap)``;

export const Row = styled(RowBootstrap)``;

export const Col = styled(ColBootstrap)``;

export const FloatContainer = styled.div`
  ${({ theme }) => css`
    &.float-container {
      display: flex;
      flex-direction: column;
      min-width: 350px;
      position: relative;
      margin: ${theme.spacings.xsmall};

      input {
        width: 100%;
        height: 56px;
        padding: 14px 16px 0 10px;
        outline: 0;
        border: 1px solid ${theme.colors.mediumGray};
        border-radius: 4px;
        background: ${theme.colors.white};
        font-family: ${theme.font.family.default};
        font-size: ${theme.font.sizes.small};
      }

      textarea {
        width: 100%;
        height: 200px;
        padding: 20px 16px 0 10px;
        outline: 0;
        border: 1px solid ${theme.colors.mediumGray};
        border-radius: 4px;
        background: ${theme.colors.white};
        font-family: ${theme.font.family.default};
        font-size: ${theme.font.sizes.small};
      }

      label {
        font-size: ${theme.font.sizes.small};
        font-family: ${theme.font.family.default};
        padding: 0 12px;
        color: ${theme.colors.secondary};
        pointer-events: none;
        position: absolute;
        transform: translate(0, 26px) scale(1);
        transform-origin: top left;
        transition: all 0.2s ease-out;
      }

      &:focus-within label {
        transform: translate(0, 3px) scale(0.75);
      }

      & .Active {
        transform: translate(0, 3px) scale(0.75);
      }
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
    border: 1px solid ${theme.colors.mediumGray};
    border-radius: 5px;
    margin: 0px 7px;
    width: 97.4%;

    &:hover {
      color: ${theme.colors.secondary};
      background-color: ${theme.colors.white};
      transition: all 300ms ease-in-out;
      border: 1px solid ${theme.colors.mediumGray};
    }

    &:focus {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      transition: all 300ms ease-in-out;
      border: 1px solid ${theme.colors.mediumGray};
    }
  `}
`;