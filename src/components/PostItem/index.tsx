import * as Styled from './styles';

import { Heading } from 'components/Heading';
import { PostArticleMeta } from 'components/PostArticleMeta';
import { PostTags } from 'components/PostTags';

import Link from 'next/link';

import { createExcerptInPostItem } from 'utils/create-excerpt';

import { PostItemProps } from './type';

export function PostItem({
  title,
  slug,
  cover = null,
  content,
  created_at,
  author,
  category,
  tags,
}: PostItemProps) {
  return (
    <Styled.Item as="li" className="border">
      <img
        width={240}
        height={240}
        className="mr-3 mt-3 rounded-circle"
        src={cover != null ? cover.srcImg : '/assets/images/ThumbCover.png'}
        alt={
          cover != null
            ? cover.alternativeText
              ? cover.alternativeText
              : title
            : title
        }
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
        <p style={{ maxWidth: '100%' }}>
          <PostTags tags={tags} />
        </p>
        <p>
          <Link href={`/post/${slug}`} passHref>
            <a>Ler</a>
          </Link>
        </p>
      </Styled.BodyItem>
    </Styled.Item>
  );
}
