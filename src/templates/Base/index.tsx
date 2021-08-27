import * as Styled from './styles';
import { HeaderGrid } from 'components/HeaderGrid';
import { FooterGrid } from 'components/FooterGrid';
import { GoTop } from 'components/GoTop';

import { BaseProps } from './type';

export const Base = ({ base, children }: BaseProps) => {
  return (
    <>
      <HeaderGrid
        links={{ links: base.headerMenu }}
        logoData={{
          text: base.logo.text,
          srcImg: base.logo.srcImg,
          alternativeText: base.logo.alternativeText,
          url: base.logo.url,
          newTab: base.logo.newTab,
        }}
      />
      <Styled.Container>{children}</Styled.Container>
      <FooterGrid
        logoFooter={{
          text: base.logo.text,
          srcImg: base.logo.srcImg,
          alternativeText: base.logo.alternativeText,
          url: base.logo.url,
          newTab: base.logo.newTab,
        }}
        socialMediaFotter={{
          street: base.footerSocialMedia.street,
          number: base.footerSocialMedia.number,
          neighborhood: base.footerSocialMedia.neighborhood,
          city: base.footerSocialMedia.city,
          state: base.footerSocialMedia.state,
          cep: base.footerSocialMedia.cep,
          instagram: base.footerSocialMedia.instagram,
          linkedin: base.footerSocialMedia.linkedin,
        }}
        contactFooter={{
          phone: base.footerContact.phone,
          email: base.footerContact.email,
          location: base.footerContact.location,
        }}
      />
      <GoTop />
    </>
  );
};
