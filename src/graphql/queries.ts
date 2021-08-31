import { gql } from 'graphql-request';
import { GRAPHQL_FRAGMENTS } from './fragments';

export const GRAPHQL_GET_HOME = gql`
  ${GRAPHQL_FRAGMENTS}

  query GET_HOME {
    base {
      id
      blogName
      blogDescription
      logoText
      logoUrl
      logoNewTab
      logo {
        ...image
      }
      header {
        menuLink {
          id
          text
          link
          newTab
        }
      }
      footer {
        street
        number
        neighborhood
        city
        state
        cep
        location
        instagram: footerMediaInstagram {
          user
          url
        }
        linkedin: footerMediaLinkedin {
          user
          url
        }
        phone: footerPhone {
          phone
          owner
        }
        email: footerEmail {
          email
        }
      }
    }
    home {
      carousel {
        id
        srcImg: imgSrc {
          ...image
        }
        imgAlt
        heading
        paragraph
      }
      specialty {
        title
        content
        linkSpecialty {
          specialty
          url
        }
      }
    }
    posts(limit: 3, sort: "createdAt:asc") {
      id
      title
      slug
      content
      allowComments
      createdAt
      ...cover
      ...authorPost
      ...categoryPost
      ...tags
    }
  }
`;

export const GRAPHQL_GET_POSTS = gql`
  ${GRAPHQL_FRAGMENTS}

  query GET_POSTS($postSlug: String) {
    base {
      id
      blogName
      blogDescription
      logoText
      logoUrl
      logoNewTab
      logo {
        ...image
      }
      header {
        menuLink {
          id
          text
          link
          newTab
        }
      }
      footer {
        street
        number
        neighborhood
        city
        state
        cep
        location
        instagram: footerMediaInstagram {
          user
          url
        }
        linkedin: footerMediaLinkedin {
          user
          url
        }
        phone: footerPhone {
          phone
          owner
        }
        email: footerEmail {
          email
        }
      }
    }
    posts(where: { slug: $postSlug }) {
      id
      title
      slug
      content
      allowComments
      createdAt
      ...cover
      ...authorPost
      ...categoryPost
      ...tags
    }
  }
`;
