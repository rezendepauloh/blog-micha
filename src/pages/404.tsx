import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import { Loading } from 'templates/Loading';
import { PageNotFoundTemplate } from 'templates/PageNotFoundTemplate';
import { PageNotFoundTemplateProps } from 'templates/PageNotFoundTemplate/type';

import { theme } from 'styles/theme';
//import { loadNotFound } from 'api/load-data';

const baseMock = {
  id: '1',
  blogName: 'Michely Segóvia',
  blogDescription: 'O melhor escritório de advocacia do mundo.',
  logo: {
    text: 'Michely Segóvia',
    srcImg:
      'https://res.cloudinary.com/dgiqhufpy/image/upload/v1631193887/logo_h_c1f7d190c2.svg',
    alternativeText: '',
    url: '/',
    newTab: false,
  },
  headerMenu: [
    {
      id: '1',
      text: 'Home',
      link: '/',
      newTab: false,
    },
    {
      id: '2',
      text: 'Sobre mim',
      link: '/sobre',
      newTab: false,
    },
    {
      id: '3',
      text: 'Equipe',
      link: '/equipe',
      newTab: false,
    },
    {
      id: '4',
      text: 'Publicações',
      link: '/posts',
      newTab: false,
    },
    {
      id: '5',
      text: 'Contato',
      link: '/contato',
      newTab: false,
    },
  ],
  footerSocialMedia: {
    street: 'Rua do Catete',
    number: 435,
    neighborhood: 'Jardim Monte Líbano',
    city: 'Campo Grande',
    state: 'MS',
    cep: '790041-70',
    instagram: [
      {
        user: 'Larissa Mancini',
        url: 'https://www.instagram.com/larimancini.adv/',
      },
      {
        user: 'Hellen Almeida',
        url: 'https://www.instagram.com/hellenalmeida.adv/',
      },
    ],
    linkedin: [
      {
        user: 'Larissa Mancini',
        url: 'https://www.linkedin.com/in/larissa-mancini-a18587194/',
      },
      {
        user: 'Hellen Almeida',
        url: 'https://www.linkedin.com/in/hellen-almeida-240a14205/',
      },
    ],
  },
  footerContact: {
    phone: [
      {
        phone: '(67) 99238-0886',
        owner: 'Larissa Mancini',
      },
      {
        phone: '(67) 99143-8422',
        owner: 'Hellen Almeida',
      },
    ],
    email: [
      {
        email: 'almeidaemancini@gmail.com',
      },
    ],
    location: 'https://goo.gl/maps/f2kyjuzcaEW1jNaq7',
  },
};

export default function Page404({
  base = baseMock,
  pageNotFound,
}: PageNotFoundTemplateProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const page404Args = {
    pageNotFound: pageNotFound,
    base: base,
  };

  const { blogName, blogDescription } = base;

  return (
    <>
      <Head>
        <title>Página não encontrada - {blogName}</title>
        <meta name="description" content={blogDescription} />
        <meta name="theme-color" content={theme.colors.primary} />
      </Head>
      <PageNotFoundTemplate {...page404Args} />
    </>
  );
}

export const getStaticProps: GetStaticProps<PageNotFoundTemplateProps> =
  async () => {
    let data = null;
    data = baseMock;

    // try {
    //   data = await loadNotFound();
    // } catch (e) {
    //   data = null;
    //   console.log(e.message);
    // }

    // console.log('O data: ');
    // console.log(data);

    const {
      id,
      blogName,
      blogDescription,
      headerMenu,
      logo: { text, srcImg, alternativeText, url, newTab },
      footerSocialMedia: {
        street,
        number,
        neighborhood,
        city,
        state,
        cep,
        instagram,
        linkedin,
      },
      footerContact: { phone, email, location },
    } = data;

    return {
      props: {
        pageNotFound: {
          title: 'Erro 404',
          html: '<p>A página que você busca não foi encontrada.</p>',
        },
        base: {
          id: id,
          blogName: blogName,
          blogDescription: blogDescription,
          logo: {
            text: text,
            srcImg: srcImg,
            alternativeText: alternativeText,
            url: url,
            newTab: newTab,
          },
          headerMenu: headerMenu,
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
