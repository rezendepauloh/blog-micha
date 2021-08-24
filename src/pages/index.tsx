import Head from 'next/head';

import { theme } from 'styles/theme';

import { HomeTemplate } from 'templates/HomeTemplate';
import { HomeTemplateProps } from 'templates/HomeTemplate/type';

export default function Index({
  carousel,
  specialties,
  posts,
  header,
  footer,
}: HomeTemplateProps) {
  const homeArgs = {
    carousel: carousel,
    specialties: specialties,
    posts: posts,
    header: header,
    footer: footer,
  };

  return (
    <>
      <Head>
        <title>Micha Advocacia</title>
        <meta name="description" content="A advocacia da Micha" />
        <meta name="theme-color" content={theme.colors.primary} />
      </Head>
      <HomeTemplate {...homeArgs} />
    </>
  );
}
