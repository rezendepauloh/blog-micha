import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { Logo } from '.';

import { mockWithImage, mockWithoutImage } from './mock';

describe('<Logo />', () => {
  it('should render text logo', () => {
    renderTheme(
      <Logo
        url={mockWithoutImage.url}
        text={mockWithoutImage.text}
        srcImg={undefined}
      />,
    );
    expect(
      screen.getByRole('heading', { name: 'Michely Segóvia' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Michely Segóvia' }),
    ).toHaveAttribute('href', '/');
  });

  it('should render text logo with a internal link', () => {
    renderTheme(
      <Logo url="/teste" text={mockWithoutImage.text} srcImg={null} />,
    );
    expect(
      screen.getByRole('heading', { name: 'Michely Segóvia' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Michely Segóvia' }),
    ).toHaveAttribute('href', '/teste');
  });

  it('should render image logo', () => {
    renderTheme(
      <Logo
        url={mockWithImage.url}
        text={mockWithImage.text}
        srcImg={mockWithImage.srcImg}
        alternativeText={mockWithImage.alternativeText}
      />,
    );
    expect(screen.getByAltText('Michely Segóvia')).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dgiqhufpy/image/upload/v1629810879/logo_h_be529e7a63.svg',
    );
  });

  it('should render internal link', () => {
    renderTheme(
      <Logo
        url="/target"
        text={mockWithImage.text}
        alternativeText="Olá mundo"
        srcImg="image.jpg"
      />,
    );
    expect(screen.getByAltText('Olá mundo')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should render external link', () => {
    renderTheme(
      <Logo
        url="http://www.google.com.br/"
        text={mockWithImage.text}
        alternativeText="Olá mundo"
        srcImg="image.jpg"
      />,
    );
    expect(screen.getByAltText('Olá mundo')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should render external link without a image', () => {
    renderTheme(
      <Logo
        url="http://www.google.com.br/"
        text={mockWithImage.text}
        alternativeText={undefined}
        srcImg={undefined}
      />,
    );
    expect(
      screen.getByRole('heading', { name: 'Michely Segóvia' }),
    ).toBeInTheDocument();
  });

  it('should render a link with target _blank', () => {
    renderTheme(
      <Logo url="/target" text={mockWithoutImage.text} newTab={true} />,
    );
    expect(
      screen.getByRole('heading', { name: 'Michely Segóvia' }),
    ).toBeInTheDocument();
  });

  it('should render render internal link with text only', () => {
    renderTheme(<Logo url="/target" text="Olá mundo" />);
    expect(
      screen.getByRole('heading', { name: 'Olá mundo' }),
    ).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <Logo url="#target" text="Olá mundo" srcImg="image.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
