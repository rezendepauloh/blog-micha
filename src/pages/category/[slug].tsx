import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';

import { theme } from 'styles/theme';

import { PostsTemplate } from 'templates/PostsTemplate';
import { Loading } from 'templates/Loading';

import { PostsTemplateProps } from 'templates/PostsTemplate/type';
import { StrapiPostsAndBase } from 'api/type';

import { loadPostsWithFilter } from 'api/load-data';

export default function CategoryPage({ posts, base }: PostsTemplateProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const postsArgs = {
    posts: posts,
    base: base,
  };

  //VAMOS TER QUE MEXER NOS TIPOS.
  //TEMOS QUE DEIXAR OS COMPONENTS TUDO IGUAIS
  //COM OS MESMOS TIPOS PARA QUE ISSO TUDO FUNCIONE

  const categoryName = posts.posts[0].category.displayName;

  const { blogName, blogDescription } = base;

  return (
    <>
      <Head>
        <title>
          Categoria: {categoryName} - {blogName}
        </title>
        <meta name="description" content={blogDescription} />
        <meta name="theme-color" content={theme.colors.primary} />
      </Head>
      <PostsTemplate {...postsArgs} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

//Erro de tipagem por causa do posts...
export const getStaticProps: GetStaticProps<StrapiPostsAndBase> = async (
  ctx,
) => {
  let data = null;
  const variables = { categorySlug: ctx.params.slug as string };

  try {
    data = await loadPostsWithFilter(variables);
  } catch (e) {
    data = null;
  }

  // console.log('O category: ');
  // console.log(data.posts[0].category);

  if (!data || !data.posts || !data.posts.length) {
    return {
      notFound: true,
    };
  }

  const {
    posts,
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
