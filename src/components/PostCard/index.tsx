import * as Styled from './styles';
import { Heading } from 'components/Heading';
import Link from 'next/link';
import { formatDate } from 'utils/format-date';
import { createExcerpt } from 'utils/create-excerpt';

import { PostCardProps } from './type';

export function PostCard({ title, url, date, imgSrc, content }: PostCardProps) {
  return (
    <Styled.Card>
      <Link href={url} passHref>
        <a>
          <Styled.ImgCard variant="top" src={imgSrc} alt={title} />
          <Styled.BodyCard>
            <Styled.TitleCard>
              <Heading as="h5" size="small" colorDark={true}>
                {title}
              </Heading>
            </Styled.TitleCard>
            <Styled.TextCard>{createExcerpt(content)}</Styled.TextCard>
          </Styled.BodyCard>
          <Styled.FooterCard>
            <small className="text-muted">{formatDate(date)}</small>
          </Styled.FooterCard>
        </a>
      </Link>
    </Styled.Card>
  );
}
