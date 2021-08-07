import { renderTheme } from '../../styles/render-theme';
import { SocialMediaFooter } from '.';

import mock from './mock';

describe('<SocialMediaFooter />', () => {
  it('should render content', () => {
    const { container } = renderTheme(<SocialMediaFooter {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
