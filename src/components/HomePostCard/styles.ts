import styled, { css } from 'styled-components';
import { Card as CardBootstrap } from 'react-bootstrap';
import { Title as HeadingContainer } from '../Heading/styles';

export const Card = styled(CardBootstrap)`
  ${({ theme }) => css`
    padding: 12px;
    width: 25%;
    margin: 5px;
    background-color: ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &:hover {
      box-shadow: 15px 15px 12px ${theme.colors.mediumGray}1a;
      transition: all 500ms ease-in-out;
    }

    @media ${theme.media.lteMedium} {
      width: 100%;
      margin: auto;
    }
  `}
`;

export const ImgCard = styled(CardBootstrap.Img)`
  width: 100%;
`;

export const BodyCard = styled(CardBootstrap.Body)``;

export const TitleCard = styled(CardBootstrap.Title)`
  ${HeadingContainer} {
    font-weight: bold;
    margin: 0.2rem 0;
  }
`;

export const TextCard = styled(CardBootstrap.Text)`
  ${({ theme }) => css`
    text-align: justify;
    color: ${theme.colors.mediumGray};
  `}
`;

export const FooterCard = styled(CardBootstrap.Footer)`
  ${({ theme }) => css`
    color: ${theme.colors.mediumGray};
    background-color: inherit;
    border-top: 1px solid ${theme.colors.mediumGray};
    text-align: center;
  `}
`;
