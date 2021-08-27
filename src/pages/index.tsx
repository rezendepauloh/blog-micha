import Head from 'next/head';
import { GetStaticProps } from 'next';

import { theme } from 'styles/theme';

import { HomeTemplate } from 'templates/HomeTemplate';
import { HomeTemplateProps } from 'templates/HomeTemplate/type';
import { loadHome } from 'api/load-posts';

export default function Index({
  carousel,
  specialty,
  posts,
  base,
}: HomeTemplateProps) {
  const homeArgs = {
    carousel: carousel,
    specialty: specialty,
    posts: posts,
    base: base,
  };

  return (
    <>
      <Head>
        <title>{homeArgs.base.blogName}</title>
        <meta name="description" content={homeArgs.base.blogDescription} />
        <meta name="theme-color" content={theme.colors.primary} />
      </Head>
      <HomeTemplate {...homeArgs} />
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeTemplateProps> = async () => {
  let data = null;

  try {
    data = await loadHome();
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

  //Vai ter que destrinchar o base de acordo com o json...
  return {
    props: {
      carousel: data.home.carousel,
      specialty: data.home.specialty,
      posts: data.posts,
      base: {
        blogName: data.base.blogName,
      },
    },
    revalidate: 24 * 60 * 60,
  };
};
