import * as Styled from './styles';
import {
  SocialMediaFooter,
  SocialMediaFooterProps,
} from '../SocialMediaFooter';
import { LogoFooter, LogoFooterProps } from '../LogoFooter';
import { ContactFooter, ContactFooterProps } from '../ContactFooter';

export type GridTextElementProps = {
  title: string;
  description: string;
};

export type GridFooterProps = {
  logoFooter: LogoFooterProps;
  socialMediaFotter: SocialMediaFooterProps;
  contactFooter: ContactFooterProps;
  component?: string;
};

export const GridFooter = ({
  logoFooter,
  socialMediaFotter,
  contactFooter,
}: GridFooterProps) => {
  return (
    <Styled.Container>
      <Styled.Grid>
        <Styled.GridElement>
          <LogoFooter {...logoFooter} />
        </Styled.GridElement>
        <Styled.GridElement>
          <SocialMediaFooter {...socialMediaFotter} />
        </Styled.GridElement>
        <Styled.GridElement>
          <ContactFooter {...contactFooter} />
        </Styled.GridElement>
      </Styled.Grid>
    </Styled.Container>
  );
};
