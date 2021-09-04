// import { PostTemplateProps } from 'templates/PostTemplate/type';
import { BaseStrapi } from 'templates/Base/type';
import { PostStrapi } from 'components/Post/type';

export type LoadPostsVariables = {
  categorySlug?: string;
  postSlug?: string;
  authorSlug?: string;
  tagSlug?: string;
  sort?: string;
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

export type StrapiPostsAndBase = {
  base: BaseStrapi;
  posts: PostStrapi;
  variables?: LoadPostsVariables;
};

export type StrapiPostsListAndBase = {
  base: BaseStrapi;
  posts: PostStrapi;
  variables?: LoadPostsVariables;
};
