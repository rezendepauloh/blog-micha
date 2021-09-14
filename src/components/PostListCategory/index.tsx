import * as Styled from './styles';
import Link from 'next/link';
// import { useCallback, useEffect, useState } from 'react';

import { Heading } from 'components/Heading';

import { PostListCategoryProps } from './type';

export function PostListCategory({
  postsCategories = [],
  title = 'Categorias',
}: PostListCategoryProps) {
  return (
    <>
      <Styled.Container>
        <Heading uppercase as="h2" size="small" colorDark={true}>
          {title}
        </Heading>
      </Styled.Container>
      <Styled.List className="list-unstyled">
        {postsCategories.map((category, index) => {
          const key = `${category.category.displayName}-${index}`;
          return (
            <Link key={key} href={`/category/${category.category.slug}`}>
              <a>{category.category.displayName}</a>
            </Link>
          );
        })}
      </Styled.List>
    </>
  );
}
