import * as Styled from './styles';

import Link from 'next/link';

import { PostCard } from 'components/PostCard';
import { Heading } from 'components/Heading';

import { PostGridProps } from './type';

export function PostGrid({ posts = [] }: PostGridProps) {
  return (
    <>
      <Styled.Container>
        <Heading uppercase as="h2" size="medium" colorDark={true}>
          Últimas Publicações
        </Heading>
      </Styled.Container>
      <Styled.CardDeck>
        {posts.map((post, index) => {
          const key = `${post.title}-${index}`;
          return <PostCard key={key} {...post} />;
        })}
      </Styled.CardDeck>
      <Styled.Container>
        <Link href="/posts" passHref>
          <a>
            <Styled.Button size="lg">Ver mais</Styled.Button>
          </a>
        </Link>
      </Styled.Container>
    </>
  );
}
