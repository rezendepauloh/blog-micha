import { screen } from '@testing-library/react';
import { Base } from '.';
import { renderTheme } from 'styles/render-theme';

import { mockBaseWithImage, mockBaseWithoutImage } from './mock';

//Fazendo um "mock" do useRouter()
// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
export function mockNextUseRouter(pathname: string) {
  useRouter.mockImplementation(() => ({
    route: '',
    basePath: '',
    pathname,
    query: {},
    asPath: '',
    push: async () => true,
    replace: async () => true,
    reload: () => null,
    back: () => null,
    prefetch: async () => undefined,
    beforePopState: () => null,
    isFallback: false,
    events: {
      on: () => null,
      off: () => null,
      emit: () => null,
    },
  }));
}

describe('<ContactTemplate />', () => {
  mockNextUseRouter('/');

  it('should render with Image Logo', () => {
    renderTheme(<Base base={mockBaseWithImage.base}>Children</Base>);

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(3);
  });
  it('should render without Image Logo', () => {
    renderTheme(<Base base={mockBaseWithoutImage.base}>Children</Base>);

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(3);
  });
});
