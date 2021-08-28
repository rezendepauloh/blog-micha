import Head from 'next/head';
import { GetStaticProps } from 'next';

import { theme } from 'styles/theme';

import { HomeTemplate } from 'templates/HomeTemplate';
import { HomeTemplateProps } from 'templates/HomeTemplate/type';
import { loadHome } from 'api/load-posts';

export default function Index({
  carousel,
  specialties,
  posts,
  base,
}: HomeTemplateProps) {
  const homeArgs = {
    carousel: carousel,
    specialties: specialties,
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

  return {
    props: {
      carousel: data.home.carousel,
      specialties: data.home.specialty,
      posts: { posts: data.posts },
      base: {
        blogName: data.base.blogName,
        blogDescription: data.base.blogDescription,
        logo: {
          text: data.base.logoText,
          srcImg: data.base.logo.srcImg,
          alternativeText: data.base.logo.alternativeText,
          url: data.base.logoUrl,
          newTab: data.base.logoNewTab,
        },
        headerMenu: data.base.header.menuLink,
        footerSocialMedia: {
          street: data.base.footer.street,
          number: data.base.footer.number,
          neighborhood: data.base.footer.neighborhood,
          city: data.base.footer.city,
          state: data.base.footer.state,
          cep: data.base.footer.cep,
          instagram: data.base.footer.instagram,
          linkedin: data.base.footer.linkedin,
        },
        footerContact: {
          phone: data.base.footer.phone,
          email: data.base.footer.email,
          location: data.base.footer.location,
        },
      },
    },
    revalidate: 24 * 60 * 60,
  };
};
