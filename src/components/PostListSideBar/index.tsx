import * as Styled from './styles';
import Link from 'next/link';
// import { useCallback, useEffect, useState } from 'react';

import { Heading } from 'components/Heading';

import { PostListSideBarProps } from './type';

export function PostListSideBar({
  categories = [],
  authors = [],
  postsTotal = [],
}: PostListSideBarProps) {
  const categoriesOnPosts = postsTotal.map((p) => {
    return p.category;
  });
  const authorsOnPosts = postsTotal.map((p) => {
    return p.author;
  });

  const occurrencesCategories = categoriesOnPosts.reduce(function (acc, curr) {
    return acc[curr.slug] ? ++acc[curr.slug] : (acc[curr.slug] = 1), acc;
  }, {});
  const occurrencesAuthors = authorsOnPosts.reduce(function (acc, curr) {
    return acc[curr.slug] ? ++acc[curr.slug] : (acc[curr.slug] = 1), acc;
  }, {});

  //console.log(occurrencesCategories);
  //console.log(Object.keys(occurrencesCategories));
  //console.log(occurrencesCategories['direito-empresarial']);
  //console.log(categoriesOnPosts);
  //console.log(categories);

  return (
    <>
      <Styled.Container>
        <Heading uppercase as="h2" size="small" colorDark={true}>
          Categorias
        </Heading>
        {/* </Styled.Container> */}
        <Styled.List className="list-unstyled">
          {categories.map((category, index) => {
            const key = `${category.id}-${index}`;

            if (occurrencesCategories[category.slug] != null) {
              return (
                <Styled.Item key={key}>
                  <Link href={`/category/${category.slug}`} passHref>
                    <Styled.LinkStyled>
                      {category.displayName} (
                      {occurrencesCategories[category.slug]})
                    </Styled.LinkStyled>
                  </Link>
                </Styled.Item>
              );
            } else {
              return;
            }
          })}
        </Styled.List>
        {/* <Styled.Container> */}
        <Heading uppercase as="h2" size="small" colorDark={true}>
          Autores
        </Heading>
        {/* </Styled.Container> */}
        <Styled.List className="list-unstyled">
          {authors.map((author, index) => {
            const key = `${author.id}-${index}`;

            if (occurrencesAuthors[author.slug] != null) {
              return (
                <Styled.Item key={key}>
                  <Link href={`/author/${author.slug}`} passHref>
                    <Styled.LinkStyled>
                      {author.displayName} ({occurrencesAuthors[author.slug]})
                    </Styled.LinkStyled>
                  </Link>
                </Styled.Item>
              );
            } else {
              return;
            }
          })}
        </Styled.List>
      </Styled.Container>
    </>
  );
}
