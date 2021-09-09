import styled, { css } from 'styled-components';
import { Carousel as CarouselBootstrap } from 'react-bootstrap';
import { Title as HeadingContainer } from 'components/Heading/styles';

export const Carousel = styled(CarouselBootstrap)`
  ${({ theme }) => css`
    .carousel-indicators {
      z-index: 4;
    }

    @media ${theme.media.lteMedium} {
      > ol {
        margin-bottom: -9px;
      }
    }
  `}
`;

export const Item = styled(CarouselBootstrap.Item)``;

export const Caption = styled(CarouselBootstrap.Caption)`
  ${({ theme }) => css`
    bottom: 38%;

    ${HeadingContainer} {
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-color: ${theme.colors.white};
      font-weight: bold;
      padding-bottom: 8px;
    }

    @media ${theme.media.xxsmall} {
      font-size: ${theme.font.sizes.small};
      margin: 0 ${theme.spacings.small};
      padding: ${theme.spacings.small};
      bottom: 10%;
      right: 9%;
      left: 7%;

      ${HeadingContainer} {
        font-size: ${theme.font.sizes.small};
        margin: ${theme.spacings.xsmall} 0;
      }

      > p {
        margin: ${theme.spacings.xsmall} 0;
      }
    }

    @media ${theme.media.xsmall} {
      font-size: ${theme.font.sizes.small};
      margin: 0 ${theme.spacings.small};
      padding: ${theme.spacings.small};
      bottom: 22%;
      right: 9%;
      left: 7%;

      ${HeadingContainer} {
        font-size: ${theme.font.sizes.small};
        margin: ${theme.spacings.xsmall} 0;
      }

      > p {
        margin: ${theme.spacings.xsmall} 0;
      }
    }

    @media ${theme.media.small} {
      font-size: ${theme.font.sizes.medium};
      margin: 0 ${theme.spacings.small};
      padding: ${theme.spacings.small};
      bottom: 35%;
      right: 9%;
      left: 7%;

      ${HeadingContainer} {
        font-size: ${theme.font.sizes.medium};
        margin: ${theme.spacings.xsmall} 0;
      }

      > p {
        margin: ${theme.spacings.xsmall} 0;
      }
    }

    @media ${theme.media.medium} {
      font-size: ${theme.font.sizes.small};
      margin: 0 ${theme.spacings.small};
      padding: ${theme.spacings.small};
      bottom: 34%;
      right: 9%;
      left: 7%;

      ${HeadingContainer} {
        font-size: ${theme.font.sizes.xlarge};
        margin: ${theme.spacings.xsmall} 0;
      }

      > p {
        margin: ${theme.spacings.xsmall} 0;
      }
    }

    @media ${theme.media.large} {
      font-size: ${theme.font.sizes.medium};
      margin: 0 ${theme.spacings.small};
      padding: ${theme.spacings.small};
      bottom: 34%;
      right: 9%;
      left: 7%;
      font-size: ${theme.spacings.small};

      ${HeadingContainer} {
        font-size: ${theme.font.sizes.xlarge};
        margin: ${theme.spacings.xsmall} 0;
      }

      > p {
        margin: ${theme.spacings.xsmall} 0;
      }
    }
  `}
`;
