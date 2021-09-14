import { screen } from '@testing-library/react';
import { Loading } from '.';
import { renderTheme } from 'styles/render-theme';

describe('<Loading />', () => {
  it('should render', () => {
    renderTheme(<Loading />);

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(1);
  });

  it('should match a snapshot', () => {
    const { container } = renderTheme(<Loading />);

    expect(container).toMatchSnapshot();
  });
});
