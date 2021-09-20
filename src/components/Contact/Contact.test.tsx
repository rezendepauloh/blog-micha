import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderTheme } from 'styles/render-theme';
import { Contact } from '.';

import mock from './mock';

describe('<Contact />', () => {
  it('should render component <Contact />', () => {
    renderTheme(
      <Contact
        name={mock.name}
        email={mock.email}
        message={mock.message}
        phone={mock.phone}
      />,
    );

    //Debug
    //screen.debug();

    // const images = screen.getAllByRole('img', { name: /title/i });
    // expect(images).toHaveLength(3);

    //Textbox
    expect(screen.getByRole('textbox', { name: 'Nome' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Email' })).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: 'Mensagem' }),
    ).toBeInTheDocument();

    //Button
    expect(screen.getByRole('button', { name: 'Enviar' })).toBeInTheDocument();

    //Link
    expect(
      screen.getByText('Entre em contato com Larissa Mancini'),
    ).toHaveAttribute(
      'href',
      'https://api.whatsapp.com/send?phone=556792380886&text=Olá,%20Larissa%20Mancini',
    );
    expect(
      screen.getByText('Entre em contato com Larissa Mancini'),
    ).toHaveAttribute('target', '_blank');

    expect(
      screen.getByText('Entre em contato com Hellen Almeida'),
    ).toHaveAttribute(
      'href',
      'https://api.whatsapp.com/send?phone=556791438422&text=Olá,%20Hellen%20Almeida',
    );
    expect(
      screen.getByText('Entre em contato com Hellen Almeida'),
    ).toHaveAttribute('target', '_blank');
  });

  it('should render click in inputs text and textarea', () => {
    renderTheme(
      <Contact
        name={mock.name}
        email={mock.email}
        message={mock.message}
        phone={mock.phone}
      />,
    );

    //Para clicar fora dos inputs
    const link = screen.getByText('Entre em contato com Hellen Almeida');

    //Click on the first input
    const inputNome = screen.getByRole('textbox', { name: 'Nome' });
    fireEvent.click(inputNome);
    userEvent.type(inputNome, 'Nome');
    userEvent.type(inputNome, '');
    fireEvent.click(link);
    //expect(inputNome.value).toBe('Nome');

    //Click on the second input
    const inputEmail = screen.getByRole('textbox', { name: 'Email' });
    fireEvent.click(inputEmail);
    userEvent.type(inputEmail, 'Email');
    //expect(inputEmail.value).toBe('Email');

    //Click on the third input
    const inputMensagem = screen.getByRole('textbox', { name: 'Mensagem' });
    fireEvent.click(inputMensagem);
    userEvent.type(inputMensagem, 'Mensagem');
    //expect(inputMensagem.value).toBe('Mensagem');

    // expect(
    //   screen.getByRole('dialog', { name: /Direito Tributário/i }),
    // ).toBeInTheDocument();

    // expect(
    //   screen.getByRole('heading', { name: /Direito Tributário/i }),
    // ).toBeInTheDocument();

    // expect(screen.getByRole('button', { name: /Close/i })).toBeInTheDocument();

    // fireEvent.click(screen.getByRole('button', { name: /Close/i }));

    // const images = screen.getAllByRole('img', { name: /title/i });
    // expect(images).toHaveLength(3);
  });
});
