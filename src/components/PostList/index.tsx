import * as Styled from './styles';
//import { useState } from 'react';
import Link from 'next/link';
//import { useRouter } from 'next/router';

import { PostItem } from 'components/PostItem';
import { Heading } from 'components/Heading';

import { PostListProps } from './type';

export function PostList({ posts = [], title = 'Artigos' }: PostListProps) {
  // const [statePosts, setStatePosts] = useState([]);
  // //const [allPosts, setAllPosts] = useState(posts);
  // const [allPosts] = useState(posts);
  // const [page, setPage] = useState(0);
  // const [postsPerPage] = useState(3);
  // const [buttonDisabled, setButtonDisabled] = useState(false);
  // const [noMorePosts, setNoMorePosts] = useState(false);

  //const router = useRouter();
  //console.log(router.pathname);

  // //O botão não fica disabled
  // setButtonDisabled(false);

  // //Seta os posts
  // setStatePosts(allPosts.slice(page, postsPerPage));

  // //Para carregar mais posts
  // const loadMorePosts = () => {
  //   const nextPage = page + postsPerPage;
  //   const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

  //   //Caso não tenha novos posts, seta NoMorePosts para true
  //   //E retorna
  //   if (!nextPosts) {
  //     setNoMorePosts(true);
  //     return;
  //   }

  //   statePosts.push(...nextPosts);

  //   setStatePosts(statePosts);
  //   setPage(nextPage);

  //   console.log(page, postsPerPage, nextPage, nextPage + postsPerPage);
  //   console.log('Carregando mais posts');
  // };

  //Testar esse aqui
  //https://vpilip.com/how-build-simple-pagination-in-nextjs/

  return (
    <>
      <Styled.Container>
        <Heading uppercase as="h2" size="small" colorDark={true}>
          {title}
        </Heading>
      </Styled.Container>
      <Styled.List className="list-unstyled">
        {/* {statePosts.map((post, index) => { */}
        {posts.map((post, index) => {
          const key = `${post.title}-${index}`;
          return <PostItem key={key} {...post} />;
        })}
      </Styled.List>
      <Styled.ButtonContainer>
        <Link href="/posts" passHref>
          <a>
            <Styled.Button
              // disabled={buttonDisabled}
              // onClick={loadMorePosts}
              size="lg"
            >
              {/* {noMorePosts ? 'Sem mais posts' : 'Ver mais'} */}
              Ver mais
            </Styled.Button>
          </a>
        </Link>
      </Styled.ButtonContainer>
    </>
  );
}
