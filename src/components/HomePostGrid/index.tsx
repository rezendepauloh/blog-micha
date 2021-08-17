import * as Styled from './styles';
import { HomePostCard, HomePostCardProps } from '../HomePostCard';
import Link from 'next/link';
import { Heading } from '../Heading';

export type HomePostGridProps = {
  posts?: HomePostCardProps[];
  title?: string;
};

export function HomePostGrid({ posts = [], title = '' }: HomePostGridProps) {
  return (
    <>
      <Styled.Container>
        {title ? (
          <Heading uppercase as="h2" size="medium" colorDark={true}>
            {title}
          </Heading>
        ) : null}
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
