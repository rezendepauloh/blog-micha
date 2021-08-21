import * as Styled from './styles';
//import { useState } from 'react';
import Link from 'next/link';
//import { useRouter } from 'next/router';

import { PostCard } from 'components/PostCard';
import { Heading } from 'components/Heading';

import { PostGridProps } from './type';

export function PostGrid({ posts = [], title = '' }: PostGridProps) {
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
      {title ? (
        <Styled.Container>
          <Heading uppercase as="h2" size="medium" colorDark={true}>
            {title}
          </Heading>
        </Styled.Container>
      ) : null}
      <Styled.CardDeck>
        {/* {statePosts.map((post, index) => { */}
        {posts.map((post, index) => {
          const key = `${post.title}-${index}`;
          return <PostCard key={key} {...post} />;
        })}
      </Styled.CardDeck>
      <Styled.Container>
        <Link href="/publicacoes" passHref>
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
      </Styled.Container>
    </>
  );
}
