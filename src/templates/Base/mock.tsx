//import linksMock from '../../components/NavLinks/mock';
//import logoLinkMock from '../../components/LogoLink/mock';
import menuMock from '../../components/Menu/mock';
import gridFooterMock from '../../components/GridFooter/mock';
import { BaseProps } from '.';

export const mockBase = {
  children: (
    <>
      <h1>Teste 01</h1>
      <p>Ainda sem os componentes que virão aqui</p>
    </>
  ),
  menu: menuMock,
  footer: gridFooterMock,
} as BaseProps;
