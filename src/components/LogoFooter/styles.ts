import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: inherit;

    > img {
      height: ${theme.spacings.large};
    }
  `}
`;
