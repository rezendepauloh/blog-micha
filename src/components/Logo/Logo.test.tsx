import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { Logo } from '.';

describe('<Logo />', () => {
  it('should render text logo', () => {
    renderTheme(<Logo link="#target" text="Olá mundo" />);
    expect(
      screen.getByRole('heading', { name: 'Olá mundo' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Olá mundo' })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('should render image logo', () => {
    renderTheme(<Logo link="#target" text="Olá mundo" srcImg="image.jpg" />);
    expect(screen.getByAltText('Olá mundo')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should render internal link', () => {
    renderTheme(<Logo link="/target" text="Olá mundo" srcImg="image.jpg" />);
    expect(screen.getByAltText('Olá mundo')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should render a link with target _blank', () => {
    renderTheme(<Logo link="/target" text="Olá mundo" newTab={true} />);
    expect(
      screen.getByRole('heading', { name: 'Olá mundo' }),
    ).toBeInTheDocument();
  });

  it('should render render internal link with text only', () => {
    renderTheme(<Logo link="/target" text="Olá mundo" />);
    expect(
      screen.getByRole('heading', { name: 'Olá mundo' }),
    ).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <Logo link="#target" text="Olá mundo" srcImg="image.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
