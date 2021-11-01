import * as Styled from './styles';
import { useCallback, useEffect, useState } from 'react';

import { PostItem } from 'components/PostItem';
import { Heading } from 'components/Heading';
import { PostListSideBar } from 'components/PostListSideBar';

import { PostListProps } from './type';

export function PostList({
  posts = [],
  postsTotal = [],
  categories = [],
  authors = [],
  title = 'Artigos',
}: PostListProps) {
  const [statePosts, setStatePosts] = useState([]);
  const [allPosts, setAllPosts] = useState(posts);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(3);

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const loadInitial = useCallback((allPosts, page, postsPerPage) => {
    setStatePosts(allPosts.slice(page, postsPerPage));
  }, []);

  useEffect(() => {
    loadInitial(allPosts, 0, postsPerPage);
  }, [loadInitial, postsPerPage, allPosts]);

  //Refresh nos posts quando clicado em categoria ou tag
  useEffect(() => {
    setAllPosts(posts);
    //setSearchValue('');
    setPage(0);
  }, [setAllPosts, setPage, posts]);

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
      <Styled.Container fluid>
        <Styled.Row xs={1} sm={1} md={12} lg={12}>
          <Styled.Col md={12} lg={{ span: 10, order: 'first' }}>
            <Heading uppercase as="h2" size="small" colorDark={true}>
              {title}
            </Heading>

            <Styled.List className="list-unstyled">
              {statePosts.map((post, index) => {
                const key = `${post.title}-${index}`;
                return <PostItem key={key} {...post} />;
              })}
            </Styled.List>
          </Styled.Col>
          <Styled.Col
            xs={{ order: 'first' }}
            md={12}
            lg={{ span: 2, order: 'last' }}
          >
            <PostListSideBar
              categories={categories}
              authors={authors}
              postsTotal={postsTotal}
            />
          </Styled.Col>
        </Styled.Row>
        <Styled.Row>
          <Styled.Col md={12}>
            <Styled.ButtonContainer>
              <Styled.Button
                disabled={noMorePosts}
                onClick={loadMorePosts}
                size="lg"
              >
                {noMorePosts ? 'Sem mais posts' : 'Ver mais'}
              </Styled.Button>
            </Styled.ButtonContainer>
          </Styled.Col>
        </Styled.Row>
      </Styled.Container>
    </>
  );
}
