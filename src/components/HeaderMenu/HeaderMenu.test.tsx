import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { HeaderMenu } from '.';

import mock from './mock';
import { theme } from 'styles/theme';

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

describe('<HeaderMenu />', () => {
  mockNextUseRouter('/');

  it('should render links', () => {
    renderTheme(<HeaderMenu links={mock.links} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.links.length);
  });

  it('should not render links', () => {
    renderTheme(<HeaderMenu />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should render links', () => {
    renderTheme(<HeaderMenu links={mock.links} />);
    expect(screen.getByText('Escritório').parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<HeaderMenu links={mock.links} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
