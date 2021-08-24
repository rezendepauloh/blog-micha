import * as Styled from './styles';
import Link from 'next/link';
import { InstagramAlt as Insta } from '@styled-icons/boxicons-logos/InstagramAlt';
import { LinkedinSquare as Linkedin } from '@styled-icons/boxicons-logos/LinkedinSquare';

import { FooterSocialMediaProps } from './type';

export const FooterSocialMedia = ({
  street,
  number,
  neighborhood,
  city,
  state,
  cep,
  instagram,
  linkedin,
}: FooterSocialMediaProps) => {
  const target = '_blank';

  return (
    <Styled.Container>
      <Styled.Paragraph>
        {street}, {number}, {neighborhood}, {city}-{state}, CEP: {cep}
      </Styled.Paragraph>

      <Styled.SocialIcon>
        <Insta aria-label="Instagram" />
        <span> Instagram</span>
      </Styled.SocialIcon>

      {instagram.map((i) => (
        <Link key={i.user} href={i.url} passHref>
          <Styled.LinkSocial target={target}>{i.user}</Styled.LinkSocial>
        </Link>
      ))}

      <Styled.LineBreaker />

      <Styled.SocialIcon>
        <Linkedin aria-label="Linkedin" />
        <span> Linkedin</span>
      </Styled.SocialIcon>

      {linkedin.map((l) => (
        <Link key={l.user} href={l.url} passHref>
          <Styled.LinkSocial target={target}>{l.user}</Styled.LinkSocial>
        </Link>
      ))}
    </Styled.Container>
  );
};
