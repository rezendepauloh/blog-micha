import * as Styled from './styles';
import { Heading } from 'components/Heading';
import Link from 'next/link';

import { HomeSpecialtiesProps } from './type';

export function HomeSpecialties({
  title,
  content,
  linkSpecialty,
}: HomeSpecialtiesProps) {
  return (
    <Styled.Jumbotron fluid>
      <Heading uppercase as="h2" size="medium" colorDark={true}>
        {title}
      </Heading>
      <p>{content}</p>

      <p>
        {linkSpecialty.map((s) => {
          const key = `${s.specialty}`.replace(/\s/g, '');
          return (
            <Link key={key} href={s.url} passHref>
              <a>
                <Styled.Button size="lg">{s.specialty}</Styled.Button>
              </a>
            </Link>
          );
        })}
      </p>
    </Styled.Jumbotron>
  );
}
