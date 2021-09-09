import * as Styled from './styles';

import { Heading } from 'components/Heading';
import { PostArticleMeta } from 'components/PostArticleMeta';

import Link from 'next/link';

import { createExcerptInPostItem } from 'utils/create-excerpt';

import { PostItemProps } from './type';

export function PostItem({
  title,
  slug,
  cover,
  content,
  created_at,
  author,
  category,
}: PostItemProps) {
  return (
    <Link href={`/post/${slug}`} passHref>
      <a>
        <Styled.Item as="li" className="border">
          <img
            width={240}
            height={240}
            className="mr-3 mt-3 rounded-circle"
            src={cover.srcImg}
            alt={cover.alternativeText ? cover.alternativeText : title}
          />

          <Styled.BodyItem>
            <Heading as="h5" size="small" colorDark={true}>
              {title}
            </Heading>
            <PostArticleMeta
              category={category}
              author={author}
              created_at={created_at}
            />
            <p>{createExcerptInPostItem(content)}</p>
            <p>
              <Link href={`/post/${slug}`} passHref>
                <a>Ler</a>
              </Link>
            </p>
          </Styled.BodyItem>
        </Styled.Item>
      </a>
    </Link>
  );
}
