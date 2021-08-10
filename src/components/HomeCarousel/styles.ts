import styled, { css } from 'styled-components';
import { Carousel as CarouselBootstrap } from 'react-bootstrap';
import { Title as HeadingContainer } from '../Heading/styles';

export const Carousel = styled(CarouselBootstrap)``;

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
  `}
`;
