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
    width: 20%;
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
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    width: 100%;
    margin: ${theme.spacings.xsmall} 0;
    color: ${theme.colors.white};
  `}
`;

export const SocialIcon = styled.i`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.small};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    text-decoration: none;

    &::before {
      content: ${`\f16d`};
    }

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
