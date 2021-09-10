import Head from 'next/head';
import { GetStaticProps } from 'next';

import { theme } from 'styles/theme';

import { TeamTemplate } from 'templates/TeamTemplate';
import { TeamTemplateProps } from 'templates/TeamTemplate/type';
import { loadPosts } from 'api/load-data';

export default function TeamPage({ base }: TeamTemplateProps) {
  const teamArgs = {
    // posts: posts,
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
      <TeamTemplate {...teamArgs} />
    </>
  );
}

export const getStaticProps: GetStaticProps<TeamTemplateProps> = async () => {
  let data = null;

  try {
    data = await loadPosts();
  } catch (e) {
    data = null;
    console.log(e.message);
  }

  console.log('O data: ');
  console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  const {
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
