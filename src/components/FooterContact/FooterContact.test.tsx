import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { FooterContact } from '.';

import mock from './mock';

describe('<FooterContact />', () => {
  it('should render a component <FooterContact />', () => {
    renderTheme(<FooterContact {...mock} />);

    //Heading
    expect(
      screen.getByRole('heading', { name: /Informações de contato/ }),
    ).toBeInTheDocument();

    //Links
    expect(
      screen.getByRole('link', { name: '(67) 99238-0886' }),
    ).toHaveAttribute(
      'href',
      'https://api.whatsapp.com/send?phone=556792380886&text=Olá,%20Larissa%20Mancini',
    );
    expect(
      screen.getByRole('link', { name: '(67) 99238-0886' }),
    ).toHaveAttribute('target', '_blank');

    expect(
      screen.getByRole('link', { name: '(67) 99143-8422' }),
    ).toHaveAttribute(
      'href',
      'https://api.whatsapp.com/send?phone=556791438422&text=Olá,%20Hellen%20Almeida',
    );
    expect(
      screen.getByRole('link', { name: '(67) 99143-8422' }),
    ).toHaveAttribute('target', '_blank');

    expect(
      screen.getByRole('link', { name: 'almeidaemancini@gmail.com' }),
    ).toHaveAttribute('href', 'mailto:almeidaemancini@gmail.com');
    expect(
      screen.getByRole('link', { name: 'almeidaemancini@gmail.com' }),
    ).toHaveAttribute('target', '_blank');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<FooterContact {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
