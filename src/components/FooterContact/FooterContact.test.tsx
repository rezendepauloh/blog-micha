import { renderTheme } from '../../styles/render-theme';
import { FooterContact } from '.';

import mock from './mock';

describe('<FooterContact />', () => {
  it('should render content', () => {
    const { container } = renderTheme(<FooterContact {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
