import { PostStrapi } from 'components/Post/type';
import { SetHeadingProps } from 'components/TableOfContents/type';
import { BaseStrapi } from 'templates/Base/type';

export type PostTemplateProps = {
  post: PostStrapi;
  base: BaseStrapi;
  headings?: SetHeadingProps[];
  activeHeading?: string;
};
