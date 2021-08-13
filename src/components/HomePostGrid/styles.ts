import styled, { css } from 'styled-components';
//import { Card as CardBootstrap } from 'react-bootstrap';
//import { Title as HeadingContainer } from '../Heading/styles';
import { CardDeck as CardDeckBootstrap } from 'react-bootstrap';

export const CardDeck = styled(CardDeckBootstrap)`
  display: flex;
  //justify-content: center;
  //align-items: center;
  flex-wrap: row wrap;
  //margin: 25px 0px 25px 0px;
`;
