import styled from 'styled-components';

export const Navigation = styled.nav`
  position: sticky;
  position: -webkit-sticky; /* For Safari */
  top: 100px; /* How far down the page you want your ToC to live */

  /* Give table of contents a scrollbar */
  max-height: calc(100vh - 41px);
  overflow: auto;
`;
