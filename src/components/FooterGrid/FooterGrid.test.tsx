import { renderTheme } from '../../styles/render-theme';
import { FooterGrid } from '.';

import mock from './mock';

describe('<FooterGrid />', () => {
  it('should render with background', () => {
    const { container } = renderTheme(<FooterGrid {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
