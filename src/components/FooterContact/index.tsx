import * as Styled from './styles';
import Link from 'next/link';
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp';
import { EmailOutline as Email } from '@styled-icons/evaicons-outline/EmailOutline';
import { Map } from '@styled-icons/boxicons-regular/Map';

import { Heading } from '../Heading';

export type PhoneProps = {
  phone: string;
  url: string;
};

export type EmailProps = {
  email: string;
  url: string;
};

export type FooterContactProps = {
  phone: PhoneProps[];
  email: EmailProps[];
  location: string;
};

export const FooterContact = ({
  phone,
  email,
  location,
}: FooterContactProps) => {
  const target = '_blank';

  return (
    <Styled.Container>
      <Heading size="small" as="h2" colorDark={false}>
        Informações de contato
      </Heading>

      {phone.map((p) => (
        <Link key={p.phone} href={p.url} passHref>
          <Styled.LinkSocial target={target}>
            <Whatsapp aria-label="Whatsapp" /> {p.phone}
          </Styled.LinkSocial>
        </Link>
      ))}

      {email.map((e) => (
        <Link key={e.email} href={e.url} passHref>
          <Styled.LinkSocial target={target}>
            <Email aria-label="Email" /> {e.email}
          </Styled.LinkSocial>
        </Link>
      ))}

      <Link href={location} passHref>
        <Styled.LinkMaps target={target}>
          <Map aria-label="Map" /> Localização
        </Styled.LinkMaps>
      </Link>
    </Styled.Container>
  );
};
