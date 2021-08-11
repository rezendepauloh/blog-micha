import styled, { css } from 'styled-components';
import { Jumbotron as JumbotronBootstrap } from 'react-bootstrap';
import { Button as ButtonBootstrap } from 'react-bootstrap';

export const Jumbotron = styled(JumbotronBootstrap)`
  ${({ theme }) => css`
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center; */
    position: relative;
    bottom: 50px;
    z-index: 555;
    box-shadow: 6px 6px 50px #2d2d2d;
    transition: box-shadow 0.2s ease-out 0s;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 0px 25px;
    padding: 25px;
    background-color: ${theme.colors.white};

    /* .mydiv{
box-shadow: 8px 15px 29px 0px #2D2D2D;
transition: box-shadow 0.2s ease-out 0s;
}
.mydiv:hover{
box-shadow: 9px 10px 15px 0px #ABABAB;
transition: box-shadow 0.3s ease-in 0s;
} */
  `}
`;

export const Button = styled(ButtonBootstrap)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.spacings.small};
    padding: 16px;
    border: none;
    background-image: linear-gradient(
      to bottom,
      #f93213,
      ${theme.colors.secondary}
    );
    cursor: pointer;
    margin: 0px 9px;

    &:hover {
      color: ${theme.colors.secondary};
      background-image: linear-gradient(
        to bottom,
        #ffffff,
        ${theme.colors.white}
      );
      //border: 1px solid ${theme.colors.primary};
      transition: all 500ms ease-in-out;
    }
  `}
`;
