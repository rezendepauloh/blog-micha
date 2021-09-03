import * as Styled from './styles';
import { About } from 'components/About';
import { Base } from '../Base';

import { AboutTemplateProps } from './type';

export function AboutTemplate({ about, base }: AboutTemplateProps) {
  return (
    <Base base={base}>
      <Styled.Container fluid>
        <About {...about} />
      </Styled.Container>
    </Base>
  );
}
