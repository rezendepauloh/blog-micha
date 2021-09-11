import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { HeaderGrid } from '.';

import {
  mockHeaderWithImage as mockWithImage,
  mockHeaderWithoutImage as mockWithoutImage,
} from './mock';

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

describe('<HeaderGrid />', () => {
  mockNextUseRouter('/');
  it('renders Navbar component', () => {
    renderTheme(
      <HeaderGrid
        links={mockWithImage.links}
        logoData={mockWithImage.logoData}
      />,
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('should render Logo and Main Menu Nav', () => {
    const { container } = renderTheme(
      <HeaderGrid
        links={mockWithoutImage.links}
        logoData={mockWithoutImage.logoData}
      />,
    );
    expect(
      screen.getByRole('heading', { name: 'Michely Segóvia' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should open/close menu on button click on mobile 01', () => {
    renderTheme(
      <HeaderGrid
        links={mockWithImage.links}
        logoData={mockWithImage.logoData}
      />,
    );

    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should open/close menu on button click on mobile 02', () => {
    renderTheme(
      <HeaderGrid
        links={mockWithImage.links}
        logoData={mockWithImage.logoData}
      />,
    );

    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.medium,
    });

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.medium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.medium,
    });
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.medium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  // it('should not render links', () => {
  //   const { container } = renderTheme(
  //     <HeaderGrid logoData={mockWithImage.logoData} />,
  //   );
  //   expect(
  //     screen.queryByRole('navigation', { name: 'Main menu' }).firstChild,
  //   ).not.toBeInTheDocument();
  //   expect(container).toMatchSnapshot();
  // });
});
