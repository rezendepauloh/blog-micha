import * as Styled from './styles';
import { HeaderGrid } from 'components/HeaderGrid';
import { FooterGrid } from 'components/FooterGrid';
import { GoTop } from 'components/GoTop';

import { BaseProps } from './type';

export const Base = ({ base, children }: BaseProps) => {
  return (
    <>
      <HeaderGrid
        links={base.header.links}
        logoData={{
          text: base.header.logoData.text,
          srcImg: base.header.logoData.srcImg,
          alternativeText: base.header.logoData.alternativeText,
          url: base.header.logoData.url,
          newTab: base.header.logoData.newTab,
        }}
      />
      <Styled.Container>{children}</Styled.Container>
      <FooterGrid
        logoFooter={{
          text: base.footer.logoFooter.text,
          srcImg: base.footer.logoFooter.srcImg,
          alternativeText: base.footer.logoFooter.alternativeText,
          url: base.footer.logoFooter.url,
          newTab: base.footer.logoFooter.newTab,
        }}
        socialMediaFotter={{
          street: base.footer.socialMediaFotter.street,
          number: base.footer.socialMediaFotter.number,
          neighborhood: base.footer.socialMediaFotter.neighborhood,
          city: base.footer.socialMediaFotter.city,
          state: base.footer.socialMediaFotter.state,
          cep: base.footer.socialMediaFotter.cep,
          instagram: base.footer.socialMediaFotter.instagram,
          linkedin: base.footer.socialMediaFotter.linkedin,
        }}
        contactFooter={{
          phone: base.footer.contactFooter.phone,
          email: base.footer.contactFooter.email,
          location: base.footer.contactFooter.location,
        }}
      />
      <GoTop />
    </>
  );
};
