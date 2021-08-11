import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    width: 100%;

    > img {
      height: 16rem;
      width: 100%;
    }
  `}
`;
