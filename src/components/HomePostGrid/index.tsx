import * as Styled from './styles';
import { HomePostCard } from 'components/HomePostCard';
import Link from 'next/link';
import { Heading } from 'components/Heading';

import { HomePostGridProps } from './type';

export function HomePostGrid({ posts = [], title = '' }: HomePostGridProps) {
  return (
    <>
      {title ? (
        <Styled.Container>
          <Heading uppercase as="h2" size="medium" colorDark={true}>
            {title}
          </Heading>
        </Styled.Container>
      ) : null}
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
