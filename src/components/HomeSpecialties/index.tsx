import * as Styled from './styles';
import { Heading } from '../Heading';

export type HomeSpecialtiesProps = {
  title?: string;
};

export function HomeSpecialties({
  title = 'Fluid Jumbotron',
}: HomeSpecialtiesProps) {
  return (
    <Styled.Jumbotron fluid>
      <Heading uppercase as="h2" size="medium" colorDark={true}>
        {title}
      </Heading>
      <p>
        This is a modified jumbotron that occupies the entire horizontal space
        of its parent.
      </p>

      <p>
        <Styled.Button href="www.google.com.br" size="lg">
          Direito Tributário
        </Styled.Button>
        <Styled.Button href="www.google.com.br" size="lg">
          Direito Empresarial
        </Styled.Button>
        <Styled.Button href="www.google.com.br" size="lg">
          Direito Civil
        </Styled.Button>
      </p>
    </Styled.Jumbotron>
  );
}
