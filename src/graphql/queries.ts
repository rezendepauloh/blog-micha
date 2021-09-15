import { gql } from 'graphql-request';
import { GRAPHQL_FRAGMENTS, GRAPHQL_ABOUT_FRAGMENTS } from './fragments';

export const GRAPHQL_GET_HOME = gql`
  ${GRAPHQL_FRAGMENTS}

  query GET_HOME($sort: String = "created_at:asc") {
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
          content
        }
      }
    }
    posts(limit: 3, sort: $sort) {
      id
      title
      slug
      content
      allowComments
      created_at
      ...cover
      ...authorPost
      ...categoryPost
      ...tags
    }
  }
`;

export const GRAPHQL_GET_ABOUT = gql`
  ${GRAPHQL_ABOUT_FRAGMENTS}

  query GET_ABOUT {
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
    about {
      title
      content
      cover {
        ...image
      }
    }
  }
`;

export const GRAPHQL_GET_POSTS = gql`
  ${GRAPHQL_FRAGMENTS}

  query GET_POSTS(
    $categorySlug: String
    $postSlug: String
    $authorSlug: String
    $tagSlug: String
    $sort: String = "created_at:desc"
  ) {
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
    posts(
      sort: $sort
      where: {
        slug: $postSlug
        category: { slug: $categorySlug }
        author: { slug: $authorSlug }
        tags: { slug: $tagSlug }
      }
    ) {
      id
      title
      slug
      content
      allowComments
      created_at
      ...cover
      ...authorPost
      ...categoryPost
      ...tags
    }
    categories {
      ...category
    }
    authors {
      ...author
    }
  }
`;
