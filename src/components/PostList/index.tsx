import * as Styled from './styles';
import { useCallback, useEffect, useState } from 'react';

import { PostItem } from 'components/PostItem';
import { Heading } from 'components/Heading';

import { PostListProps } from './type';

export function PostList({ posts = [], title = 'Artigos' }: PostListProps) {
  const [statePosts, setStatePosts] = useState([]);
  const [allPosts] = useState(posts);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(3);

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const loadInitial = useCallback((allPosts, page, postsPerPage) => {
    setStatePosts(allPosts.slice(page, postsPerPage));
  }, []);

  useEffect(() => {
    loadInitial(allPosts, 0, postsPerPage);
  }, [loadInitial, postsPerPage, allPosts]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    statePosts.push(...nextPosts);

    setStatePosts(statePosts);
    setPage(nextPage);

    // console.log('Page: ' + page);
    // console.log('postsPerPage: ' + postsPerPage);
    // console.log('nextPage: ' + nextPage);
    // console.log('sum: ' + (nextPage + postsPerPage));
    // console.log('Carregando mais posts');
  };

  return (
    <>
      <Styled.Container>
        <Heading uppercase as="h2" size="small" colorDark={true}>
          {title}
        </Heading>
      </Styled.Container>
      <Styled.List className="list-unstyled">
        {statePosts.map((post, index) => {
          const key = `${post.title}-${index}`;
          return <PostItem key={key} {...post} />;
        })}
      </Styled.List>
      <Styled.ButtonContainer>
        <Styled.Button disabled={noMorePosts} onClick={loadMorePosts} size="lg">
          {noMorePosts ? 'Sem mais posts' : 'Ver mais'}
        </Styled.Button>
      </Styled.ButtonContainer>
    </>
  );
}
