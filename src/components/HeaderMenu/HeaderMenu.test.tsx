import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { HeaderMenu } from '.';
import RouterMock from 'utils/mockRouter';

import mock from './mock';
import { theme } from 'styles/theme';

describe('<HeaderMenu />', () => {
  it('should render links', () => {
    renderTheme(
      <RouterMock>
        <HeaderMenu links={mock.links} />
      </RouterMock>,
    );
    expect(screen.getAllByRole('link')).toHaveLength(mock.links.length);
  });

  it('should not render links', () => {
    renderTheme(
      <RouterMock>
        <HeaderMenu />
      </RouterMock>,
    );
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should render links', () => {
    renderTheme(
      <RouterMock>
        <HeaderMenu links={mock.links} />
      </RouterMock>,
    );
    expect(screen.getByText('Sobre mim').parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <RouterMock>
        <HeaderMenu links={mock.links} />
      </RouterMock>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
