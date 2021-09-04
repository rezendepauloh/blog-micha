import * as Styled from './styles';
import { Heading } from 'components/Heading';

export const Loading = () => {
  return (
    <>
      <Styled.Container>
        <Heading as="h1" size="xsmall" colorDark={false}>
          Carregando...
        </Heading>
      </Styled.Container>
    </>
  );
};
