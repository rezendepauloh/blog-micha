import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from 'components/Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} ${theme.spacings.xsmall};
    z-index: 1;
    position: sticky;
    top: 100px;
    height: max-content;

    ${HeadingContainer} {
      margin: ${theme.spacings.small} 0;
      border-bottom: 1px solid ${theme.colors.primary};
      padding-bottom: ${theme.spacings.medium};
      padding-left: 5px;
    }

    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
      width: 100%;
      margin: auto;
    }

    @media ${theme.media.small} {
      flex-flow: column wrap;
      align-content: center;
      width: 100%;
      margin: ${theme.spacings.xsmall} 0;
    }
  `}
`;

export const List = styled.ul`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} 0;
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: row wrap;
    margin: ${theme.spacings.xsmall} 0;
  `}
`;

export const Item = styled.li`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
    padding-left: 11px;
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
