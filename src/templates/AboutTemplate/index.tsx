import * as Styled from './styles';
import { About } from 'components/About';
import { Base } from '../Base';

import { AboutTemplateProps } from './type';
import { Heading } from 'components/Heading';

export function AboutTemplate({ about, base }: AboutTemplateProps) {
  return (
    <Base base={base}>
      <Styled.Container fluid>
        <Styled.TitleContainer>
          <Heading as="h1" colorDark={false} size="medium" uppercase>
            Sobre Mim
          </Heading>
        </Styled.TitleContainer>
        <About {...about} />
      </Styled.Container>
    </Base>
  );
}
