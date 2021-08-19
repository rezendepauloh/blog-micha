import * as Styled from './styles';
import { useState } from 'react';
import Link from 'next/link';

import { HomePostCard } from 'components/HomePostCard';
import { Heading } from 'components/Heading';

import { HomePostGridProps } from './type';

export function HomePostGrid({ posts = [], title = '' }: HomePostGridProps) {
  const [statePosts, setStatePosts] = useState([]);
  //const [allPosts, setAllPosts] = useState(posts);
  const [allPosts] = useState(posts);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(3);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  //O botão não fica disabled
  setButtonDisabled(false);

  //Seta os posts
  setStatePosts(allPosts.slice(page, postsPerPage));

  //Para carregar mais posts
  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    //Caso não tenha novos posts, seta NoMorePosts para true
    //E retorna
    if (!nextPosts) {
      setNoMorePosts(true);
      return;
    }

    statePosts.push(...nextPosts);

    setStatePosts(statePosts);
    setPage(nextPage);

    console.log(page, postsPerPage, nextPage, nextPage + postsPerPage);
    console.log('Carregando mais posts');
  };

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
        {statePosts.map((post, index) => {
          const key = `${post.title}-${index}`;
          return <HomePostCard key={key} {...post} />;
        })}
      </Styled.CardDeck>
      <Styled.Container>
        <Link href="/publicacoes" passHref>
          <a>
            <Styled.Button
              disabled={buttonDisabled}
              onClick={loadMorePosts}
              size="lg"
            >
              {noMorePosts ? 'Sem mais posts' : 'Ver mais'}
            </Styled.Button>
          </a>
        </Link>
      </Styled.Container>
    </>
  );
}
