import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { HeaderMenu } from '.';

import mock from './mock';
import { theme } from 'styles/theme';

describe('<HeaderMenu />', () => {
  it('should render links', () => {
    renderTheme(<HeaderMenu {...mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    renderTheme(<HeaderMenu />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should render links', () => {
    renderTheme(<HeaderMenu {...mock} />);
    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<HeaderMenu {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
