import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';

import { theme } from 'styles/theme';

import { PostsTemplate } from 'templates/PostsTemplate';
import { Loading } from 'templates/Loading';

import { PostsTemplateProps } from 'templates/PostsTemplate/type';
//import { StrapiPostsListAndBase } from 'api/type';

import { loadPostsWithFilter } from 'api/load-data';

export default function CategoryPage({
  posts,
  postsTotal = [],
  base,
  categories = [],
  authors = [],
}: PostsTemplateProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const categoryName = posts[0].category.displayName;

  const { blogName } = base;

  const categoryArgs = {
    title: `Categoria: ${categoryName}`,
    posts: posts,
    base: base,
    categories: categories,
    authors: authors,
    postsTotal: postsTotal,
  };

  return (
    <>
      <Head>
        <title>
          Categoria: {categoryName} - {blogName}
        </title>
        <meta name="theme-color" content={theme.colors.primary} />
      </Head>
      <PostsTemplate {...categoryArgs} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let data: PostsTemplateProps | null = null;
  let paths = [];

  try {
    data = await loadPostsWithFilter();
    paths = data.posts.map((post) => ({
      params: { slug: post.category.slug },
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
  const variables = { categorySlug: ctx.params.slug as string };

  try {
    data = await loadPostsWithFilter(variables);
  } catch (e) {
    data = null;
  }

  // console.log('O data: ');
  // console.log(data);

  if (!data || !data.posts || !data.posts.length) {
    return {
      notFound: true,
    };
  }

  const {
    posts,
    categories,
    authors,
    postsTotal,
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
      postsTotal: postsTotal,
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
