import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';

import { theme } from 'styles/theme';

import { HomeTemplate } from 'templates/HomeTemplate';
import { Loading } from 'templates/Loading';

import { HomeTemplateProps } from 'templates/HomeTemplate/type';

import { loadHome } from 'api/load-data';

export default function Index({
  carousel,
  specialties,
  posts,
  base,
}: HomeTemplateProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const homeArgs = {
    carousel: carousel,
    specialties: specialties,
    posts: posts,
    base: base,
  };

  const { blogName, blogDescription } = base;

  return (
    <>
      <Head>
        <title>{blogName}</title>
        <meta name="description" content={blogDescription} />
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

  // console.log('O data: ');
  // console.log(data);

  if (!data || !data.posts || !data.posts.length) {
    return {
      notFound: true,
    };
  }

  const {
    home: { carousel, specialty },
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
      carousel: carousel,
      specialties: specialty,
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
    },
    revalidate: 24 * 60 * 60,
  };
};
