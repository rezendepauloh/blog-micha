import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    background: ${theme.colors.primary};

    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
    }

    @media ${theme.media.medium} {
      flex-flow: column wrap;
      align-content: center;
    }
  `}
`;
