import Head from 'next/head';
import { GetStaticProps } from 'next';

import { theme } from 'styles/theme';

import { ContactTemplate } from 'templates/ContactTemplate';
import { ContactTemplateProps } from 'templates/ContactTemplate/type';
import { loadContact } from 'api/load-data';

export default function ContactPage({ base, contact }: ContactTemplateProps) {
  const contactArgs = {
    base: base,
    contact: {
      name: contact.name,
      email: contact.email,
      message: contact.message,
      phone: base.footerContact.phone,
    },
  };

  const { blogName, blogDescription } = base;

  return (
    <>
      <Head>
        <title>Contato - {blogName}</title>
        <meta name="description" content={blogDescription} />
        <meta name="theme-color" content={theme.colors.primary} />
      </Head>
      <ContactTemplate {...contactArgs} />
    </>
  );
}

export const getStaticProps: GetStaticProps<ContactTemplateProps> =
  async () => {
    let data = null;

    try {
      data = await loadContact();
    } catch (e) {
      data = null;
      console.log(e.message);
    }

    // console.log('O data: ');
    // console.log(data);

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
        contact: {
          name: '',
          email: '',
          message: '',
          phone: phone,
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
