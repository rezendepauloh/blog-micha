import * as Styled from './styles';
import Link from 'next/link';

import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp';
import { EmailOutline as Email } from '@styled-icons/evaicons-outline/EmailOutline';
import { InstagramAlt as Insta } from '@styled-icons/boxicons-logos/InstagramAlt';

import { Heading } from 'components/Heading';

import { AboutProps } from './type';

export const About = ({
  title,
  content,
  cover,
  phone,
  email,
  instagram,
}: AboutProps) => {
  const target = '_blank';

  return (
    <>
      <Styled.Container fluid>
        <Styled.Row>
          <Styled.Col md={6}>
            {/*  Tentar jogar o título no meio, e fazer um efeito abaixo dele */}
            <Styled.TitleContainer>
              <Heading size="small" as="h2" colorDark={false}>
                {title}
              </Heading>
            </Styled.TitleContainer>
            <Styled.Paragraph dangerouslySetInnerHTML={{ __html: content }} />
          </Styled.Col>
          <Styled.Col md={6}>
            <img
              src={cover.srcImg}
              alt={cover.alternativeText ? cover.alternativeText : title}
            />
          </Styled.Col>
        </Styled.Row>
      </Styled.Container>

      <Styled.Container fluid className="aboutFooter">
        <Styled.Row>
          <Styled.Col md={4}>
            <Heading size="small" as="h4" colorDark={false}>
              Instagram
            </Heading>
          </Styled.Col>
          <Styled.Col md={4}>
            <Heading size="small" as="h4" colorDark={false}>
              Telefone
            </Heading>
          </Styled.Col>
          <Styled.Col md={4}>
            <Heading size="small" as="h4" colorDark={false}>
              Email
            </Heading>
          </Styled.Col>
        </Styled.Row>
      </Styled.Container>
      <Styled.Container fluid>
        <Styled.Row>
          <Styled.Col md={4}>
            {instagram.map((i) => (
              <Link key={i.user} href={i.url} passHref>
                <Styled.LinkSocial target={target}>
                  <Insta aria-label="Instagram" className="instaAbout" />{' '}
                  {i.user}
                </Styled.LinkSocial>
              </Link>
            ))}
          </Styled.Col>
          <Styled.Col md={4}>
            {phone.map((p) => {
              const replaceOwner = p.owner.replace(' ', '%20');
              const replacePhone = p.phone.replace(
                /\((\d{2})\)\s\d(\d{4})-(\d{4})/g,
                '$1$2$3',
              );
              const url = `https://api.whatsapp.com/send?phone=55${replacePhone}&text=Olá,%20${replaceOwner}`;
              return (
                <Link key={p.phone} href={url} passHref>
                  <Styled.LinkSocial target={target}>
                    <Whatsapp aria-label="Whatsapp" /> {p.phone}
                  </Styled.LinkSocial>
                </Link>
              );
            })}
          </Styled.Col>
          <Styled.Col md={4}>
            {email.map((e, index) => {
              const key = `${index}-${e.email}`;
              const url = `mailto:${e.email}`;
              return (
                <Link key={key} href={url} passHref>
                  <Styled.LinkSocial target={target}>
                    <Email aria-label="Email" /> {e.email}
                  </Styled.LinkSocial>
                </Link>
              );
            })}
          </Styled.Col>
        </Styled.Row>
      </Styled.Container>
    </>
  );
};
