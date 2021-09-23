import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';

import { loadPosts, loadPost } from 'api/load-data';

import { PostTemplate } from 'templates/PostTemplate';
import { Loading } from 'templates/Loading';

import { StrapiPostAndBase } from 'api/type';

import { createExcerpt } from 'utils/create-excerpt';

export default function PostPage({ posts, base }: StrapiPostAndBase) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const postArgs = {
    post: posts,
    base: base,
  };

  const { title, content } = posts;
  const { blogName } = base;

  return (
    <>
      <Head>
        <title>
          {title} - {blogName}
        </title>
        <meta name="description" content={createExcerpt(content)} />
      </Head>
      <PostTemplate {...postArgs} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let data = null;
  let paths = [];

  try {
    data = await loadPosts();
    paths = data.posts.map((post: StrapiPostAndBase) => ({
      params: { slug: post.posts.slug },
    }));
  } catch (e) {
    console.log(e.message);
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    paths = [];
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<StrapiPostAndBase> = async (
  ctx,
) => {
  let data = null;
  const variables = { postSlug: ctx.params.slug as string };

  try {
    data = await loadPost(variables);
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

  // console.log('O post: ');
  // console.log(posts[0]);

  return {
    props: {
      posts: posts[0],
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
    },
    revalidate: 24 * 60 * 60,
  };
};
