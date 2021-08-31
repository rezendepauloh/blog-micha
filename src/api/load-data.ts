import { request } from 'graphql-request';

import { HomeTemplateProps } from 'templates/HomeTemplate/type';
import { PostsTemplateProps } from 'templates/PostsTemplate/type';
import { StrapiPostAndBase, LoadPostsVariables } from './type';

import config from 'config/index';
import { GRAPHQL_GET_HOME, GRAPHQL_GET_POSTS } from '../graphql/queries';

export const loadHome = async (): Promise<HomeTemplateProps> => {
  const data = await request(config.graphqlURL, GRAPHQL_GET_HOME);

  return data;
};

export const loadPosts = async (): Promise<PostsTemplateProps> => {
  const data = await request(config.graphqlURL, GRAPHQL_GET_POSTS);

  return data;
};

export const loadPost = async (
  variables: LoadPostsVariables = {},
): Promise<StrapiPostAndBase> => {
  const data = await request(config.graphqlURL, GRAPHQL_GET_POSTS, {
    ...variables,
  });

  return data;
};
