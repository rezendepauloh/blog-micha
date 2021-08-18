import * as Styled from './styles';
import { HomePostGrid, HomePostGridProps } from 'components/HomePostGrid';
import { HeaderGridProps } from 'components/HeaderGrid';
import { FooterGridProps } from 'components/FooterGrid';
import { Base } from 'templates/Base';

export type PostsTemplateProps = {
  posts: HomePostGridProps;
  header: HeaderGridProps;
  footer: FooterGridProps;
};

export function PostsTemplate({ posts, header, footer }: PostsTemplateProps) {
  //Mesclar a forma do react course-1 com React-Course-6

  return (
    <Base header={header} footer={footer}>
      <Styled.Container fluid>
        <HomePostGrid {...posts} />
      </Styled.Container>
    </Base>
  );
}
