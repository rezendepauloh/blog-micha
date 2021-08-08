import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: ${theme.spacings.medium} 0;
    background-color: ${theme.colors.primary};
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    //counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: ${theme.spacings.xhuge};
    overflow: hidden;
    width: 100%;

    /*
display: grid;
grid-template-columns: repeat(auto-fill,minmax(360px,1fr));
gap: 16.2rem;
overflow: hidden;
width: 100%;
* */

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridElement = styled.div`
  position: relative;
  left: 5rem;

  &::before {
    //counter-increment: grid-counter;
    //content: counter(grid-counter);
    position: absolute;
    font-size: 7rem;
    top: -3rem;
    left: -5rem;
    transform: rotate(5deg);
  }
`;
