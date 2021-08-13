import * as Styled from './styles';
import { HomePostCard, HomePostCardProps } from '../HomePostCard';
import { Heading } from '../Heading';

export type HomePostGridProps = {
  posts?: HomePostCardProps[];
};

export function HomePostGrid({ posts = [] }: HomePostGridProps) {
  return (
    <>
      <Heading as="h2" size="medium" colorDark={true}>
        Últimos artigos
      </Heading>
      <Styled.CardDeck>
        {posts.map((post, index) => {
          const key = `${post.title}-${index}`;
          return <HomePostCard key={key} {...post} />;
        })}
      </Styled.CardDeck>
    </>
  );
}
