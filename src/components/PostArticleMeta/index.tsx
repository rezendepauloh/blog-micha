import Link from 'next/link';
import { formatDate } from 'utils/format-date';
import * as Styled from './styles';

import { PostArticleMetaProps } from './type';

export const PostArticleMeta = ({
  created_at,
  author = undefined,
  category = undefined,
}: PostArticleMetaProps) => {
  return (
    <Styled.Wrapper>
      <p>
        {author && typeof author !== 'undefined' && (
          <>
            <span>Por </span>
            <Link href={`/author/${author.slug}`}>
              <a>{author.displayName}</a>
            </Link>
            <span className="separator"> | </span>
          </>
        )}

        <time dateTime={created_at}>{formatDate(created_at)}</time>

        {category && typeof category !== 'undefined' && (
          <>
            <span className="separator"> | </span>
            <span className="categories">
              <span>
                <Link href={`/category/${category.slug}`}>
                  <a>{category.displayName}</a>
                </Link>
              </span>
            </span>
          </>
        )}
      </p>
    </Styled.Wrapper>
  );
};
