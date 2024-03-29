import * as Styled from './styles';

import { Heading } from 'components/Heading';

import Link from 'next/link';

import { formatDate } from 'utils/format-date';
import { createExcerpt } from 'utils/create-excerpt';

import { PostCardProps } from './type';

export function PostCard({
  title,
  slug,
  cover = null,
  content,
  created_at,
}: PostCardProps) {
  return (
    <Styled.Card>
      <Link href={`/post/${slug}`} passHref>
        <a>
          {cover != null && (
            <Styled.ImgCard
              variant="top"
              src={cover.srcImg}
              alt={cover.alternativeText ? cover.alternativeText : title}
            />
          )}
          <Styled.BodyCard>
            <Styled.TitleCard>
              <Heading as="h5" size="small" colorDark={true}>
                {title}
              </Heading>
            </Styled.TitleCard>
            <Styled.TextCard>{createExcerpt(content)}</Styled.TextCard>
          </Styled.BodyCard>
          <Styled.FooterCard>
            <small className="text-muted">{formatDate(created_at)}</small>
          </Styled.FooterCard>
        </a>
      </Link>
    </Styled.Card>
  );
}
