import headerGridMock from 'components/HeaderGrid/mock';
import {
  mockFooterWithImage,
  mockFooterWithoutImage,
} from 'components/FooterGrid/mock';
import { BaseProps } from '.';

export const mockBaseWithImage = {
  children: (
    <>
      <h1>Teste</h1>
    </>
  ),
  header: headerGridMock,
  footer: mockFooterWithImage,
} as BaseProps;

export const mockBaseWithoutImage = {
  children: (
    <>
      <h1>Teste</h1>
    </>
  ),
  header: headerGridMock,
  footer: mockFooterWithoutImage,
} as BaseProps;
