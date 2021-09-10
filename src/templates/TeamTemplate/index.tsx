import * as Styled from './styles';

import { Base } from '../Base';

import { TeamTemplateProps } from './type';
import { Heading } from 'components/Heading';

export function TeamTemplate({ base }: TeamTemplateProps) {
  return (
    <Base base={base}>
      <Styled.Container fluid>
        <Styled.TitleContainer>
          <Heading as="h1" colorDark={false} size="medium" uppercase>
            Equipe
          </Heading>
        </Styled.TitleContainer>
        <h1>Em breve</h1>
      </Styled.Container>
    </Base>
  );
}
