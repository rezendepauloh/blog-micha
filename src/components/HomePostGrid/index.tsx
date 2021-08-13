import * as Styled from './styles';
import { HomePostCard, HomePostCardProps } from '../HomePostCard';
import Link from 'next/link';
import { Heading } from '../Heading';

export type HomePostGridProps = {
  posts?: HomePostCardProps[];
};

export function HomePostGrid({ posts = [] }: HomePostGridProps) {
  return (
    <>
      <Styled.Container>
        <Heading uppercase as="h2" size="medium" colorDark={true}>
          Últimos artigos
        </Heading>
      </Styled.Container>
      <Styled.CardDeck>
        {posts.map((post, index) => {
          const key = `${post.title}-${index}`;
          return <HomePostCard key={key} {...post} />;
        })}
      </Styled.CardDeck>
      <Styled.Container>
        <Link href="/publicacoes" passHref>
          <a>
            <Styled.Button size="lg">Ver mais</Styled.Button>
          </a>
        </Link>
      </Styled.Container>
    </>
  );
}
