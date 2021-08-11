import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { FooterLogo } from '.';

describe('<FooterLogo />', () => {
  it('should render text logo', () => {
    renderTheme(<FooterLogo text="Olá mundo" />);
    expect(
      screen.getByRole('heading', { name: 'Olá mundo' }),
    ).toBeInTheDocument();
  });

  it('should render image logo', () => {
    renderTheme(<FooterLogo text="Olá mundo" srcImg="image.jpg" />);
    expect(screen.getByAltText('Olá mundo')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <FooterLogo text="Olá mundo" srcImg="image.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
