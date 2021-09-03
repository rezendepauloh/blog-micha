import styled, { css } from 'styled-components';
import { Jumbotron as JumbotronBootstrap } from 'react-bootstrap';
import { Button as ButtonBootstrap } from 'react-bootstrap';
import { Modal as ModalBootstrap } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';
import { ModalTitle as ModalTitleBootstrap } from 'react-bootstrap';
import { ModalBody as ModalBodyBootstrap } from 'react-bootstrap';

import { Title as HeadingContainer } from 'components/Heading/styles';
import { Container as Html } from 'components/PostContent/styles';

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

    &:focus {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      transition: all 300ms ease-in-out;
      border: 1px solid ${theme.colors.primary};
    }
  `}
`;

export const Modal = styled(ModalBootstrap)`
  .modal-content {
    border-radius: 5px;
  }

  .modal-lg,
  .modal-xl {
    max-width: 80%;
  }
`;

export const Header = styled(ModalHeader)`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.primary};
    background-color: ${theme.colors.primary};

    .close {
      font-size: ${theme.spacings.medium};
      font-weight: bold;
      color: white;
      margin-top: -5px;
    }

    .modal-header {
      border-bottom: 1px solid ${theme.colors.primary};
    }

    ${HeadingContainer} {
      margin: ${theme.spacings.xsmall} 0;
    }
  `}
`;
export const Title = styled(ModalTitleBootstrap)``;
export const Body = styled(ModalBodyBootstrap)`
  ${Html}

  ${({ theme }) => css`
    font-size: calc(${theme.font.sizes.small} + 0.2rem);
    line-height: 1.5;

    p {
      margin: ${theme.spacings.medium} 0;
    }

    a,
    a:visited,
    a:link {
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: all 300ms ease-in-out;
    }

    a:hover {
      filter: brightness(50%);
    }

    code {
      font-family: monospace;
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.small};
      background: ${theme.colors.darkerGray};
      padding: 0.2rem;
      margin: 0.2rem;
    }

    pre {
      background: ${theme.colors.primary};
      padding: ${theme.spacings.medium};
      font-family: monospace;
      color: ${theme.colors.white};
      margin: ${theme.spacings.medium} 0;
      width: 100%;
      overflow-x: auto;
      font-size: ${theme.font.sizes.small};
    }

    pre code {
      color: inherit;
      background: inherit;
    }

    img {
      max-width: 100%;
    }

    .image {
      background: ${theme.colors.darkerGray};
      line-height: 0;
      margin: ${theme.spacings.medium} 0;
    }

    .image figcaption {
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.small};
      text-align: center;
      line-height: 1.3;
    }

    .image-style-side {
      max-width: 50%;
      float: right;
      margin: ${theme.spacings.medium} 0;
    }

    hr {
      border: none;
      border-bottom: 0.1rem solid ${theme.colors.mediumGray};
    }

    ul,
    ol {
      margin: ${theme.spacings.medium} ${theme.spacings.xlarge};
    }

    .table {
      width: 100%;
      overflow: hidden;
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: ${theme.spacings.medium} 0;
    }

    table td,
    table th {
      padding: ${theme.spacings.small};
      border: 0.1rem solid ${theme.colors.mediumGray};
    }

    blockquote {
      border-left: 0.5rem solid ${theme.colors.secondary};
      color: ${theme.colors.mediumGray};
      filter: brightness(80%);
      padding-left: ${theme.spacings.medium};
      font-style: italic;
      margin: ${theme.spacings.medium};
    }

    @media ${theme.media.lteMedium} {
      font-size: 2rem;

      .image-style-side {
        max-width: 100%;
        float: none;
        margin: 0;
      }
    }
  `}
`;
