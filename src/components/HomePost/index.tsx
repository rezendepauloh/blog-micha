import * as Styled from './styles';
import { Heading } from '../Heading';

export type HomePostProps = {
  title: string;
  imgSrc: string;
  content: string;
};

export function HomePost({ title, imgSrc, content }: HomePostProps) {
  return (
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
  );
}
