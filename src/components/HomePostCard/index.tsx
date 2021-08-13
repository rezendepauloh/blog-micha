import * as Styled from './styles';
import { Heading } from '../Heading';
import Link from 'next/link';

export type HomePostCardProps = {
  title: string;
  url: string;
  imgSrc: string;
  content: string;
};

export function HomePostCard({
  title,
  url,
  imgSrc,
  content,
}: HomePostCardProps) {
  return (
    <Link href={url} passHref>
      <a>
        <Styled.Card>
          <Styled.ImgCard variant="top" src={imgSrc} alt={title} />
          <Styled.BodyCard>
            <Styled.TitleCard>
              <Heading as="h5" size="small" colorDark={true}>
                {title}
              </Heading>
            </Styled.TitleCard>
            <Styled.TextCard>{content}</Styled.TextCard>
          </Styled.BodyCard>
          <Styled.FooterCard>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Styled.FooterCard>
        </Styled.Card>
      </a>
    </Link>
  );
}
