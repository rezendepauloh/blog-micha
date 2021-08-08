import { renderTheme } from '../../styles/render-theme';
import { ContactFooter } from '.';

import mock from './mock';

describe('<ContactFooter />', () => {
  it('should render content', () => {
    const { container } = renderTheme(<ContactFooter {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
