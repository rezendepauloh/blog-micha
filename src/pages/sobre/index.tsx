import Head from 'next/head';
import { GetStaticProps } from 'next';

import { theme } from 'styles/theme';

import { AboutTemplate } from 'templates/AboutTemplate';
import { AboutTemplateProps } from 'templates/AboutTemplate/type';
import { loadAbout } from 'api/load-data';

export default function AboutPage({ about, base }: AboutTemplateProps) {
  const aboutArgs = {
    about: about,
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
      <AboutTemplate {...aboutArgs} />
    </>
  );
}

export const getStaticProps: GetStaticProps<AboutTemplateProps> = async () => {
  let data = null;

  try {
    data = await loadAbout();
  } catch (e) {
    data = null;
    console.log(e.message);
  }

  console.log('O data: ');
  console.log(data);

  if (!data || !data.about) {
    return {
      notFound: true,
    };
  }

  const {
    about: {
      title,
      content,
      cover: {
        id: idCover,
        alternativeText: altCoverAbout,
        srcImg: srcImgAbout,
      },
    },
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
      about: {
        title: title,
        content: content,
        cover: {
          id: idCover,
          alternativeText: altCoverAbout,
          srcImg: srcImgAbout,
        },
        phone: phone,
        email: email,
        instagram: instagram,
      },
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
