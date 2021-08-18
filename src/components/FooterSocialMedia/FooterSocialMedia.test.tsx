import { renderTheme } from 'styles/render-theme';
import { FooterSocialMedia } from '.';

import mock from './mock';

describe('<FooterSocialMedia />', () => {
  it('should render content', () => {
    const { container } = renderTheme(<FooterSocialMedia {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
