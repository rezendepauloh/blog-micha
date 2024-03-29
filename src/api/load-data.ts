import { request } from 'graphql-request';

import { HomeTemplateProps } from 'templates/HomeTemplate/type';
import { PostsTemplateProps } from 'templates/PostsTemplate/type';
import { AboutTemplateProps } from 'templates/AboutTemplate/type';
import { ContactTemplateProps } from 'templates/ContactTemplate/type';
import { PageNotFoundTemplateProps } from 'templates/PageNotFoundTemplate/type';

import {
  StrapiPostAndBase,
  StrapiPostsAndBase,
  LoadPostsVariables,
} from './type';

import config from 'config/index';
import {
  GRAPHQL_GET_BASE,
  GRAPHQL_GET_HOME,
  GRAPHQL_GET_POSTS,
  GRAPHQL_GET_ABOUT,
} from 'graphql/queries';

export const loadHome = async (): Promise<HomeTemplateProps> => {
  const data = await request(config.graphqlURL, GRAPHQL_GET_HOME);

  return data;
};

export const loadAbout = async (): Promise<AboutTemplateProps> => {
  const data = await request(config.graphqlURL, GRAPHQL_GET_ABOUT);

  return data;
};

export const loadContact = async (): Promise<ContactTemplateProps> => {
  const data = await request(config.graphqlURL, GRAPHQL_GET_BASE);

  return data;
};

export const loadNotFound = async (): Promise<PageNotFoundTemplateProps> => {
  const data = await request(config.graphqlURL, GRAPHQL_GET_BASE);

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

export const loadPostsWithFilter = async (
  variables: LoadPostsVariables = {},
): Promise<StrapiPostsAndBase> => {
  const data = await request(config.graphqlURL, GRAPHQL_GET_POSTS, {
    ...variables,
  });

  return data;
};
