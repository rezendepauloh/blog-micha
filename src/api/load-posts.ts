import { request } from 'graphql-request';
//import { BaseStrapi } from 'templates/Base/type';
import { HomeTemplateProps } from 'templates/HomeTemplate/type';
import config from 'config/index';
import { GRAPHQL_QUERY } from '../graphql/queries';

export const loadHome = async (): Promise<HomeTemplateProps> => {
  const data = await request(config.graphqlURL, GRAPHQL_QUERY);

  return data;
};

// import { data } from 'api/dados.json';

// export const loadPosts = async () => {
//   //const postsResponse = fetch(data);

//   //const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

//   //const postsJson = await posts.json();
//   //const photosJson = await photos.json();

//   //const postsAndPhotos = postsJson.map((post, index) => {
//   //  return { ...post, cover: photosJson[index].url };
//   //});

//   //return postsAndPhotos;
//   return data;
// };
