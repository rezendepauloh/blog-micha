import * as Styled from './styles';
import {
  SocialMediaFooter,
  SocialMediaFooterProps,
} from '../SocialMediaFooter';
import { LogoFooter, LogoFooterProps } from '../LogoFooter';
import { ContactFooter, ContactFooterProps } from '../ContactFooter';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    <Styled.Container fluid>
      <Row>
        <Col md="auto">
          <LogoFooter {...logoFooter} />
        </Col>
        <Col md="auto">
          <SocialMediaFooter {...socialMediaFotter} />
        </Col>
        <Col md="auto">
          <ContactFooter {...contactFooter} />
        </Col>
      </Row>
    </Styled.Container>
  );
};
