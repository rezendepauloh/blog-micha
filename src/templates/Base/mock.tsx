import { BaseProps } from './type';
import {
  mockHeaderWithImage as mockHeaderImage,
  mockHeaderWithoutImage as mockHeaderWithoutImage,
} from 'components/HeaderGrid/mock';
import {
  mockFooterWithImage as mockFooterImage,
  mockFooterWithoutImage as mockFooterWithoutImage,
} from 'components/FooterGrid/mock';
//import { data } from 'api/dados.json';

export const mockBaseWithImage = {
  children: (
    <>
      <h1>Teste</h1>
    </>
  ),
  header: mockHeaderImage,
  footer: mockFooterImage,
} as BaseProps;

export const mockBaseWithoutImage = {
  children: (
    <>
      <h1>Teste</h1>
    </>
  ),
  header: mockHeaderWithoutImage,
  footer: mockFooterWithoutImage,
} as BaseProps;
