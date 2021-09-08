import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${theme.colors.white};
    justify-content: center;

    > a > img {
      height: 15rem;
      width: 100%;
    }
  `}
`;

export const Link = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.white};

    &:hover {
      text-decoration: none;
      color: ${theme.colors.white};
    }
  `}
`;
