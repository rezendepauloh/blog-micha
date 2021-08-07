import * as Styled from './styles';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export type GridTextElementProps = {
  title: string;
  description: string;
};

export type GridFooterProps = {
  title: string;
  description: string;
  grid: GridTextElementProps[];
  component?: string;
};

export const GridFooter = ({ title, description, grid }: GridFooterProps) => {
  return (
    <Styled.Container>
      <Heading size="huge" uppercase as="h2">
        {title}
      </Heading>
      <TextComponent>{description}</TextComponent>
      <Styled.Grid>
        {grid.map((el) => (
          <Styled.GridElement key={el.title}>
            <Heading size="medium" as="h3">
              {el.title}
            </Heading>
            <TextComponent>{el.description}</TextComponent>
          </Styled.GridElement>
        ))}
      </Styled.Grid>
    </Styled.Container>
  );
};
