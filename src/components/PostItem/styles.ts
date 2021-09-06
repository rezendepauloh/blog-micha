import styled, { css } from 'styled-components';
import { Media as MediaBootstrap } from 'react-bootstrap';
import { Title as HeadingContainer } from 'components/Heading/styles';

export const Item = styled(MediaBootstrap)`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: ${theme.colors.white};
    line-height: ${theme.spacings.small};
    margin: ${theme.spacings.medium} 0;
    padding: ${theme.spacings.medium} ${theme.spacings.small};

    &:hover {
      box-shadow: 15px 15px 12px ${theme.colors.mediumGray}1a;
      transition: all 500ms ease-in-out;
      > img {
        filter: grayscale(0%);
        transform: scale(1.1);
        transition: all 0.4s ease-in;
      }
    }

    > img {
      background-position: center;
      background-size: cover;
      filter: grayscale(100%);
      transition: transform 0.5s ease;
    }

    /* > img:hover {
      filter: grayscale(0%);
      transform: scale(1.1);
      transition: all 0.4s ease-in;
    } */

    @media ${theme.media.lteMedium} {
      width: 100%;
      padding: ${theme.spacings.small} ${theme.spacings.xsmall}

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > img {
        width: 150px;
        height: 150px;
      }
    }

    @media ${theme.media.small} {
      width: 100%;
      margin: ${theme.spacings.xsmall} 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > img {
        width: 150px;
        height: 150px;
      }
    }

    @media ${theme.media.medium} {
      width: 100%;
      margin: ${theme.spacings.xsmall} 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `}
`;

export const BodyItem = styled(MediaBootstrap.Body)`
  ${({ theme }) => css`
    text-align: justify;
    color: ${theme.colors.mediumGray};
    margin: ${theme.spacings.xsmall} ${theme.spacings.small};

    > p {
      line-height: ${theme.spacings.medium};
    }

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: all 300ms ease-in-out;

      &:hover {
        filter: brightness(50%);
      }
    }

    @media ${theme.media.lteMedium} {
      width: 100%;
      margin: ${theme.spacings.xsmall} 0;

      > ${HeadingContainer} {
        text-text-align: left;
      }
    }

    @media ${theme.media.small} {
      width: 100%;
      margin: ${theme.spacings.xsmall} 0;
    }

    @media ${theme.media.medium} {
      width: 100%;
      margin: ${theme.spacings.xsmall} 0;
    }
  `}
`;
