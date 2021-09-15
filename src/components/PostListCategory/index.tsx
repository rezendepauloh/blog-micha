import * as Styled from './styles';
import Link from 'next/link';
// import { useCallback, useEffect, useState } from 'react';

import { Heading } from 'components/Heading';

import { PostListCategoryProps } from './type';

export function PostListCategory({
  categories = [],
  posts = [],
  title = 'Categorias',
}: PostListCategoryProps) {
  const categoriesOnPosts = posts.map((p) => {
    return p.category;
  });

  const occurrences = categoriesOnPosts.reduce(function (acc, curr) {
    return acc[curr.slug] ? ++acc[curr.slug] : (acc[curr.slug] = 1), acc;
  }, {});

  //console.log(occurrences);
  //console.log(Object.keys(occurrences));
  //console.log(occurrences['direito-empresarial']);
  //console.log(categoriesOnPosts);
  //console.log(categories);

  return (
    <>
      <Styled.Container>
        <Heading uppercase as="h2" size="small" colorDark={true}>
          {title}
        </Heading>
      </Styled.Container>
      <Styled.List className="list-unstyled">
        {categories.map((category, index) => {
          const key = `${category.id}-${index}`;

          if (occurrences[category.slug] != null) {
            return (
              <Styled.Item key={key}>
                <Link href={`/category/${category.slug}`} passHref>
                  <Styled.LinkStyled>
                    {category.displayName} ({occurrences[category.slug]})
                  </Styled.LinkStyled>
                </Link>
              </Styled.Item>
            );
          } else {
            return;
          }
        })}
      </Styled.List>
    </>
  );
}
