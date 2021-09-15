import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';

import { theme } from 'styles/theme';

import { PostsTemplate } from 'templates/PostsTemplate';
import { Loading } from 'templates/Loading';

import { PostsTemplateProps } from 'templates/PostsTemplate/type';
import { StrapiPostsListAndBase } from 'api/type';

import { loadPostsWithFilter } from 'api/load-data';

export default function AuthorPage({
  posts,
  base,
  categories = [],
}: PostsTemplateProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const authorName = posts.posts[0].author.displayName;

  const { blogName, blogDescription } = base;

  const authorArgs = {
    posts: { title: `Autor: ${authorName}`, ...posts },
    base: base,
    categories: categories,
  };

  return (
    <>
      <Head>
        <title>
          Autor: {authorName} - {blogName}
        </title>
        <meta name="description" content={blogDescription} />
        <meta name="theme-color" content={theme.colors.primary} />
      </Head>
      <PostsTemplate {...authorArgs} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<StrapiPostsListAndBase> = async (
  ctx,
) => {
  let data = null;
  const variables = { authorSlug: ctx.params.slug as string };

  try {
    data = await loadPostsWithFilter(variables);
  } catch (e) {
    data = null;
  }

  //console.log('O author: ');
  // console.log(data.posts[0].author);
  //console.log(data);

  if (!data || !data.posts || !data.posts.length) {
    return {
      notFound: true,
    };
  }

  const {
    posts,
    categories,
    base: {
      id,
      blogName,
      blogDescription,
      header: { menuLink },
      logoText,
      logoUrl,
      logoNewTab,
      logo: { srcImg, alternativeText },
      footer: {
        street,
        number,
        neighborhood,
        city,
        state,
        cep,
        instagram,
        linkedin,
        phone,
        email,
        location,
      },
    },
  } = data;

  return {
    props: {
      posts: { posts: posts },
      categories: categories,
      base: {
        id: id,
        blogName: blogName,
        blogDescription: blogDescription,
        logo: {
          text: logoText,
          srcImg: srcImg,
          alternativeText: alternativeText,
          url: logoUrl,
          newTab: logoNewTab,
        },
        headerMenu: menuLink,
        footerSocialMedia: {
          street: street,
          number: number,
          neighborhood: neighborhood,
          city: city,
          state: state,
          cep: cep,
          instagram: instagram,
          linkedin: linkedin,
        },
        footerContact: {
          phone: phone,
          email: email,
          location: location,
        },
      },
      variables: {
        ...variables,
      },
    },
    revalidate: 24 * 60 * 60,
  };
};
