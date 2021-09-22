import * as Styled from './styles';

import { Base } from '../Base';

import { PageNotFoundTemplateProps } from './type';

import { PageNotFound } from 'components/PageNotFound';

export function PageNotFoundTemplate({
  base,
  pageNotFound,
}: PageNotFoundTemplateProps) {
  return (
    <Base base={base}>
      <Styled.Container fluid>
        <PageNotFound title={pageNotFound.title} html={pageNotFound.html} />
      </Styled.Container>
    </Base>
  );
}
