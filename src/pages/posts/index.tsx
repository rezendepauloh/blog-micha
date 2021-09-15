import Head from 'next/head';
import { GetStaticProps } from 'next';

import { theme } from 'styles/theme';

import { PostsTemplate } from 'templates/PostsTemplate';
import { PostsTemplateProps } from 'templates/PostsTemplate/type';
import { loadPosts } from 'api/load-data';

export default function PostsPage({
  posts,
  base,
  categories,
}: PostsTemplateProps) {
  const postsArgs = {
    posts: posts,
    base: base,
    categories: categories,
  };

  const { blogName, blogDescription } = base;

  return (
    <>
      <Head>
        <title>{blogName}</title>
        <meta name="description" content={blogDescription} />
        <meta name="theme-color" content={theme.colors.primary} />
      </Head>
      <PostsTemplate {...postsArgs} />
    </>
  );
}

export const getStaticProps: GetStaticProps<PostsTemplateProps> = async () => {
  let data = null;

  try {
    data = await loadPosts();
  } catch (e) {
    data = null;
    console.log(e.message);
  }

  console.log('O data: ');
  console.log(data);

  if (!data || !data.posts || !data.posts.length) {
    return {
      notFound: true,
    };
  }

  const {
    categories,
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
    },
    revalidate: 24 * 60 * 60,
  };
};
