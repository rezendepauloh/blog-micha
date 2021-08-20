import { renderTheme } from 'styles/render-theme';
import { About } from '.';

import mock from './mock';

describe('<About />', () => {
  it('should render with Image', () => {
    const { container } = renderTheme(<About {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
