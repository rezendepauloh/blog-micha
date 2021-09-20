import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from 'components/Heading/styles';

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

    ${HeadingContainer} {
      margin-top: 0;
    }

    @media ${theme.media.xxsmall} {
      display: flex;
      justify-content: center;
      width: 100%;

      ${HeadingContainer} {
        display: flex;
        justify-content: center;
        width: 100%;
      }
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      justify-content: center;

      ${HeadingContainer} {
        display: flex;
        justify-content: center;
        width: 100%;
      }
    }

    @media ${theme.media.medium} {
      display: flex;
      justify-content: center;

      ${HeadingContainer} {
        display: flex;
        justify-content: center;
        width: 100%;
      }
    }

    @media ${theme.media.large} {
      display: flex;
      justify-content: center;

      ${HeadingContainer} {
        display: flex;
        justify-content: center;
        width: 100%;
      }
    }
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

    @media ${theme.media.lteMedium} {
      display: flex;
      justify-content: center;
    }

    @media ${theme.media.medium} {
      display: flex;
      justify-content: center;
    }

    @media ${theme.media.large} {
      display: flex;
      justify-content: center;
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
    border: 1px solid ${theme.colors.secondary};
    border-radius: ${theme.radius.default};

    &:hover {
      color: ${theme.colors.secondary};
      background-color: ${theme.colors.white};
      transition: all 300ms ease-in-out;
      border: 1px solid;
    }

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  `}
`;
