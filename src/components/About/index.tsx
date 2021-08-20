import * as Styled from './styles';
import Image from 'next/image';
import { Heading } from 'components/Heading';

import { AboutProps } from './type';

export const About = ({ title, content, imgSrc }: AboutProps) => {
  return (
    <Styled.Container fluid>
      <Styled.Row>
        <Styled.Col md="auto">
          <Heading size="small" as="h2" colorDark={true}>
            {title}
          </Heading>
          <Styled.Paragraph>{content}</Styled.Paragraph>
        </Styled.Col>
        <Styled.Col md="auto">
          <Image src={imgSrc} alt={title} width={500} height={500} />
        </Styled.Col>
      </Styled.Row>
    </Styled.Container>
  );
};
