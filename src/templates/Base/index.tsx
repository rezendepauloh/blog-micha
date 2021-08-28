import * as Styled from './styles';
import { HeaderGrid } from 'components/HeaderGrid';
import { FooterGrid } from 'components/FooterGrid';
import { GoTop } from 'components/GoTop';

import { BaseProps } from './type';

export const Base = ({ base, children }: BaseProps) => {
  const {
    headerMenu: menu,
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
  } = base;

  return (
    <>
      <HeaderGrid
        links={{ links: menu }}
        logoData={{
          text: text,
          srcImg: srcImg,
          alternativeText: alternativeText,
          url: url,
          newTab: newTab,
        }}
      />
      <Styled.Container>{children}</Styled.Container>
      <FooterGrid
        logoFooter={{
          text: text,
          srcImg: srcImg,
          alternativeText: alternativeText,
          url: url,
          newTab: newTab,
        }}
        socialMediaFotter={{
          street: street,
          number: number,
          neighborhood: neighborhood,
          city: city,
          state: state,
          cep: cep,
          instagram: instagram,
          linkedin: linkedin,
        }}
        contactFooter={{
          phone: phone,
          email: email,
          location: location,
        }}
      />
      <GoTop />
    </>
  );
};
