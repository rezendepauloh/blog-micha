import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';

import { theme } from 'styles/theme';

import { PostsTemplate } from 'templates/PostsTemplate';
import { Loading } from 'templates/Loading';

import { PostsTemplateProps } from 'templates/PostsTemplate/type';
// import { StrapiPostsListAndBase } from 'api/type';

import { loadPostsWithFilter } from 'api/load-data';

export default function AuthorPage({
  posts,
  base,
  categories = [],
  authors = [],
}: PostsTemplateProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const authorName = posts[0].author.displayName;

  const { blogName } = base;

  const authorArgs = {
    title: `Autor: ${authorName}`,
    posts: posts,
    base: base,
    categories: categories,
    authors: authors,
  };

  return (
    <>
      <Head>
        <title>
          Autor: {authorName} - {blogName}
        </title>
        <meta name="theme-color" content={theme.colors.primary} />
      </Head>
      <PostsTemplate {...authorArgs} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let data: PostsTemplateProps | null = null;
  let paths = [];

  try {
    data = await loadPostsWithFilter();
    paths = data.posts.map((post) => ({
      params: { slug: post.author.slug },
    }));
  } catch (e) {
    // console.log('Erro do getStaticPaths do data: ');
    // console.log(e.message);
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    paths = [];
  }

  // console.log('Path: ');
  // console.log(paths);
  // console.log('Data: ');
  // console.log(data);

  return {
    paths,
    fallback: false,
  };

  // return {
  //   paths: [],
  //   fallback: false,
  // };
};

export const getStaticProps: GetStaticProps<PostsTemplateProps> = async (
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
    authors,
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
      posts: posts,
      categories: categories,
      authors: authors,
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
