import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { HeaderGrid } from '.';
import RouterMock from 'utils/mockRouter';

import {
  mockHeaderWithImage as mockWithImage,
  mockHeaderWithoutImage as mockWithoutImage,
} from './mock';

import { theme } from 'styles/theme';

describe('<HeaderGrid />', () => {
  it('renders Navbar component', () => {
    renderTheme(
      <RouterMock>
        <HeaderGrid
          links={mockWithImage.links}
          logoData={mockWithImage.logoData}
        />
      </RouterMock>,
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('should render Logo and Main Menu Nav', () => {
    const { container } = renderTheme(
      <RouterMock>
        <HeaderGrid
          links={mockWithoutImage.links}
          logoData={mockWithoutImage.logoData}
        />
      </RouterMock>,
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
      <RouterMock>
        <HeaderGrid
          links={mockWithImage.links}
          logoData={mockWithImage.logoData}
        />
      </RouterMock>,
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
      <RouterMock>
        <HeaderGrid
          links={mockWithImage.links}
          logoData={mockWithImage.logoData}
        />
      </RouterMock>,
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
  //     <RouterMock><HeaderGrid logoData={mockWithImage.logoData} /></RouterMock>,
  //   );
  //   expect(
  //     screen.queryByRole('navigation', { name: 'Main menu' }).firstChild,
  //   ).not.toBeInTheDocument();
  //   expect(container).toMatchSnapshot();
  // });
});
