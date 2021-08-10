import styled, { css } from 'styled-components';
import { Carousel as CarouselBootstrap } from 'react-bootstrap';

export const Carousel = styled(CarouselBootstrap)``;

export const Item = styled(CarouselBootstrap.Item)``;

export const Caption = styled(CarouselBootstrap.Caption)`
  ${({ theme }) => css`
    bottom: 50%;

    > h3 {
      border-bottom-style: solid;
      border-bottom-width: 1px;
      font-size: 64px;
      padding-bottom: 8px;
      border-color: ${theme.colors.white};
    }
  `}
`;
