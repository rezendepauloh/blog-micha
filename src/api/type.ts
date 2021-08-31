// import { PostTemplateProps } from 'templates/PostTemplate/type';
import { BaseStrapi } from 'templates/Base/type';
import { PostStrapi } from 'components/Post/type';

export type LoadPostsVariables = {
  postSlug?: string;
};

// export type StrapiPostAndBase = {
//   post: PostTemplateProps;
//   variables?: LoadPostsVariables;
// };

export type StrapiPostAndBase = {
  base: BaseStrapi;
  posts: PostStrapi;
  variables?: LoadPostsVariables;
};
