import headerGridMock from '../../components/HeaderGrid/mock';
import gridFooterMock from '../../components/FooterGrid/mock';
import { HomeContent } from '../../components/HomeContent';
import homeContentMock from '../../components/HomeContent/mock';
import { BaseProps } from '.';

export const mockBase = {
  children: (
    <>
      <HomeContent {...homeContentMock} />
    </>
  ),
  menu: headerGridMock,
  footer: gridFooterMock,
} as BaseProps;
