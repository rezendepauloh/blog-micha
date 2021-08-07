import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SocialMediaFooter } from '.';

describe('<SocialMediaFooter />', () => {
  it('should render content', () => {
    const { container } = renderTheme(
      <SocialMediaFooter>
        <h1>Children</h1>
      </SocialMediaFooter>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
