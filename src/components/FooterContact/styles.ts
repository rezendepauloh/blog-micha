import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: 0 auto;
    padding: ${theme.spacings.small};
    justify-content: center;
    align-items: flex-start;
    text-align: left !important;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color: ${theme.colors.white};
  `}
`;

export const LinkSocial = styled.a`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.secondary};
    text-decoration: none;
    margin: ${theme.spacings.xsmall};
    font-weight: bold;

    &:hover {
      color: ${theme.colors.white};
      transition: all 300ms ease-in-out;
    }

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  `}
`;

export const LinkMaps = styled.a`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    width: 100%;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    text-align: center;
    margin-top: ${theme.spacings.small};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: ${theme.colors.secondary};
      background-color: ${theme.colors.white};
      transition: all 300ms ease-in-out;
    }

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  `}
`;
