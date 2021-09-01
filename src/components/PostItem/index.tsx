import * as Styled from './styles';

import { Heading } from 'components/Heading';

import Link from 'next/link';

import { formatDate } from 'utils/format-date';
import { createExcerpt } from 'utils/create-excerpt';

import { PostItemProps } from './type';

//Incorporar esse
//https://react-bootstrap-v4.netlify.app/layout/media/
export function PostItem({
  title,
  slug,
  cover,
  content,
  createdAt,
}: PostItemProps) {
  return (
    <Styled.Item>
      <Link href={`/post/${slug}`} passHref>
        <a>
          <Styled.ImgCard variant="top" src={cover.srcImg} alt={title} />
          <Styled.BodyCard>
            <Styled.TitleCard>
              <Heading as="h5" size="small" colorDark={true}>
                {title}
              </Heading>
            </Styled.TitleCard>
            <Styled.TextCard>{createExcerpt(content)}</Styled.TextCard>
          </Styled.BodyCard>
          <Styled.FooterCard>
            <small className="text-muted">{formatDate(createdAt)}</small>
          </Styled.FooterCard>
        </a>
      </Link>
    </Styled.Item>
  );
}
