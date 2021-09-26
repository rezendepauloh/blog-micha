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
    list-style: none;

    > a {
      /* display: block;
      position: relative; */
      text-decoration: none;
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.secondary};
    }

    > a::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: 0;
      left: 0;
      background: ${theme.colors.secondary};
      visibility: hidden;
      border-radius: 5px;
      transform: scaleX(0);
      transition: 0.25s linear;
    }

    > li.active > a {
      color: ${theme.colors.secondary};
      font-weight: bold;
    }

    > li.active > a::before {
      visibility: visible;
      transform: scaleX(1);
    }

    > li > a:hover {
      color: ${theme.colors.secondary};
      font-weight: bold;
    }

    > li > a:hover::before,
    > li > a:focus:before {
      visibility: visible;
      transform: scaleX(1);
    }
  `}
`;

export const LinkStyled = styled.a`
  ${({ theme }) => css`
    display: block;
    position: relative;
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.secondary};

    &::after {
      content: '';
      position: absolute;
      top: 100%;
      bottom: 0;
      left: 0;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.secondary};
      transition: all 300ms ease-in-out;
    }

    &:hover {
      color: ${theme.colors.primary};
      transition: all 300ms ease-in-out;
    }

    &:hover::after {
      left: 0;
      width: 100%;
      top: 100%;
    }
  `}
`;
