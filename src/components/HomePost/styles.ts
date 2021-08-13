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
    cursor: pointer;

    &:hover {
      //box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1);
      box-shadow: 1px 1px 20px ${theme.colors.mediumGray};
      transition: all 500ms ease-in-out;
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
  text-align: justify;
`;

export const FooterCard = styled(CardBootstrap.Footer)`
  ${({ theme }) => css`
    color: ${theme.colors.mediumGray};
    background-color: inherit;
    border-top: 1px solid ${theme.colors.mediumGray};
  `}
`;
