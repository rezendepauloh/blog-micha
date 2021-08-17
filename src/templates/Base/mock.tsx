import headerGridMock from '../../components/HeaderGrid/mock';
import gridFooterMock from '../../components/FooterGrid/mock';
import { BaseProps } from '.';

export const mockBase = {
  children: (
    <>
      <h1>Teste</h1>
    </>
  ),
  header: headerGridMock,
  footer: gridFooterMock,
} as BaseProps;
