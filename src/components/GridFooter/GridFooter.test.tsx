import { renderTheme } from '../../styles/render-theme';
import { GridFooter } from '.';

import mock from './mock';

describe('<GridFooter />', () => {
  it('should render with background', () => {
    const { container } = renderTheme(<GridFooter {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without background', () => {
    const { container } = renderTheme(
      <GridFooter {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
