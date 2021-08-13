import * as Styled from './styles';
import { HomePostCard, HomePostCardProps } from '../HomePostCard';

export type HomePostGridProps = {
  posts?: HomePostCardProps[];
};

export function HomePostGrid({ posts = [] }: HomePostGridProps) {
  return (
    <Styled.CardDeck>
      {posts.map((post, index) => {
        const key = `${post.title}-${index}`;
        return <HomePostCard key={key} {...post} />;
      })}
    </Styled.CardDeck>
  );
}
