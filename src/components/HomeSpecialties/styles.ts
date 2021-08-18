import styled, { css } from 'styled-components';
import { Jumbotron as JumbotronBootstrap } from 'react-bootstrap';
import { Button as ButtonBootstrap } from 'react-bootstrap';
import { Title as HeadingContainer } from 'components/Heading/styles';

export const Jumbotron = styled(JumbotronBootstrap)`
  ${({ theme }) => css`
    position: relative;
    bottom: 50px;
    z-index: 2;
    box-shadow: 4px 13px 21px ${theme.colors.mediumGray}4d;
    transition: box-shadow 0.2s ease-out 0s;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 0 ${theme.spacings.medium};
    padding: ${theme.spacings.medium};
    background-color: ${theme.colors.white};

    @media ${theme.media.lteMedium} {
      margin: 0 ${theme.spacings.small};
      padding: ${theme.spacings.small};
      bottom: 10px;
      ${HeadingContainer} {
        font-size: ${theme.font.sizes.medium};
        margin: ${theme.spacings.xsmall} 0;
      }
    }
  `}
`;

export const Button = styled(ButtonBootstrap)`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    text-align: center;
    font-size: ${theme.spacings.small};
    padding: ${theme.spacings.small};
    text-decoration: none;
    font-weight: bold;
    border: 1px solid;
    border-radius: 5px;
    margin: 0px 9px;

    &:hover {
      color: ${theme.colors.secondary};
      background-color: ${theme.colors.white};
      transition: all 300ms ease-in-out;
      border: 1px solid;
    }
  `}
`;
