import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    width: 100%;

    > img {
      //height: ${theme.spacings.huge};
      width: 100%;
    }
  `}
`;
