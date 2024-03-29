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

export const Paragraph = styled.p`
  ${({ theme }) => css`
    width: 100%;
    margin: ${theme.spacings.xsmall} 0;
    color: ${theme.colors.white};

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

export const SocialIcon = styled.i`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.small};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    text-decoration: none;

    > span {
      margin-right: ${theme.spacings.small};
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.small};
      font-style: normal;
    }

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }

    @media ${theme.media.large} {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    @media ${theme.media.medium} {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  `}
`;

export const LineBreaker = styled.hr`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    height: 1px;
    border: none;
    margin: ${theme.spacings.small} 0;
  `}
`;
