import * as Styled from './styles';
import { Heading } from '../Heading';
import Link from 'next/link';

export type SpecialtiesProps = {
  specialty: string;
  url: string;
};

export type HomeSpecialtiesProps = {
  title: string;
  content: string;
  specialties: SpecialtiesProps[];
};

export function HomeSpecialties({
  title,
  content,
  specialties,
}: HomeSpecialtiesProps) {
  return (
    <Styled.Jumbotron fluid>
      <Heading uppercase as="h2" size="medium" colorDark={true}>
        {title}
      </Heading>
      <p>{content}</p>

      <p>
        {specialties.map((s) => {
          const key = `${s.specialty}`.replace(/\s/g, '');
          return (
            <Link key={key} href={s.url} passHref>
              <Styled.Button size="lg">{s.specialty}</Styled.Button>
            </Link>
          );
        })}
      </p>
    </Styled.Jumbotron>
  );
}
