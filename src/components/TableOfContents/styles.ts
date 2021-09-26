import styled, { css } from 'styled-components';

export const Navigation = styled.nav`
  position: sticky;
  position: -webkit-sticky; /* For Safari */
  top: 100px; /* How far down the page you want your ToC to live */

  /* Give table of contents a scrollbar */
  max-height: calc(100vh - 41px);
  overflow: auto;

  h2,
  h3 {
    scroll-margin-top: 16px;
  }

  /* Safari-only */
  @supports (-webkit-hyphens: none) {
    h2,
    h3 {
      padding-top: 16px;
      margin-top: -16px;
    }
  }
`;

export const List = styled.ul`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} ${theme.spacings.small};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};

    > a {
      color: grey;
      text-decoration: none;
    }

    > li.active > a {
      color: white;
    }

    > li > a:hover {
      color: white;
    }
  `}
`;
