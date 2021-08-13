import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    height: 9rem;

    > img {
      height: 9rem;
    }
  `}
`;