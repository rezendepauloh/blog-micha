import { gql } from 'graphql-request';

export const GRAPHQL_FRAGMENTS = gql`
  fragment image on UploadFile {
    id
    alternativeText
    srcImg: url
  }

  fragment cover on Post {
    cover {
      ...image
    }
  }

  fragment tag on Tag {
    id
    displayName
    slug
  }

  fragment author on Author {
    id
    displayName
    slug
  }

  fragment category on Category {
    id
    displayName
    slug
  }

  fragment tags on Post {
    tags {
      ...tag
    }
  }

  fragment authorPost on Post {
    author {
      ...author
    }
  }

  fragment categoryPost on Post {
    category {
      ...category
    }
  }
`;

export const GRAPHQL_ABOUT_FRAGMENTS = gql`
  fragment image on UploadFile {
    id
    alternativeText
    srcImg: url
  }
`;
