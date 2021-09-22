import { Heading } from 'components/Heading';
import * as Styled from './styles';

import { PageNotFoundProps } from './type';

export const PageNotFound = ({
  title = 'Erro 404',
  html = '<p>A página que você busca não foi encontrada.</p>',
}: PageNotFoundProps) => {
  return (
    <>
      <Styled.Container>
        <Heading uppercase colorDark={true} as="h2">
          {title}
        </Heading>
        <Styled.Html dangerouslySetInnerHTML={{ __html: html }} />
      </Styled.Container>
    </>
  );
};
