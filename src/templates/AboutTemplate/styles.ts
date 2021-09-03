import styled, { css } from 'styled-components';
import { Container as ContainerBootstrap } from 'react-bootstrap';

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
    background: ${theme.colors.primary};
  `}
`;
