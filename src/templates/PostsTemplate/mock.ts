import { PostsTemplateProps } from '.';
import { mockWithoutTitle } from '../../components/HomePostGrid/mock';
import headerGridMock from '../../components/HeaderGrid/mock';
import gridFooterMock from '../../components/FooterGrid/mock';

export default {
  posts: mockWithoutTitle,
  header: headerGridMock,
  footer: gridFooterMock,
} as PostsTemplateProps;
