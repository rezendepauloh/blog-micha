import * as Styled from './styles';

import { Base } from '../Base';

import { ContactTemplateProps } from './type';
import { Heading } from 'components/Heading';
import { Contact } from 'components/Contact';

export function ContactTemplate({ base, contact }: ContactTemplateProps) {
  const contactArgs = {
    name: contact.name,
    email: contact.email,
    message: contact.message,
    phone: base.footerContact.phone,
  };

  return (
    <Base base={base}>
      <Styled.Container fluid>
        <Styled.TitleContainer>
          <Heading as="h1" colorDark={false} size="medium" uppercase>
            Contato
          </Heading>
        </Styled.TitleContainer>
        <Contact {...contactArgs} />
      </Styled.Container>
    </Base>
  );
}
