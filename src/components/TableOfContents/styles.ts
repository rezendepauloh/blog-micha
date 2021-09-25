import styled from 'styled-components';

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
