import { PostStrapi } from 'components/Post/type';
//import { TableOfContentsProps } from 'components/TableOfContents/type';
import { BaseStrapi } from 'templates/Base/type';

export type PostTemplateProps = {
  post: PostStrapi;
  base: BaseStrapi;
  //headings?: TableOfContentsProps;
};
