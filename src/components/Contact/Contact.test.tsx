import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderTheme } from 'styles/render-theme';
import { Contact } from '.';
//import { rest } from 'msw'; // msw supports graphql too!

import mock from './mock';

//jest.mock('pages/api/contact');

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
    //const link = screen.getByText('Entre em contato com Hellen Almeida');

    //Inputs
    const inputNome = screen.getByRole('textbox', { name: 'Nome' });
    const inputEmail = screen.getByRole('textbox', { name: 'Email' });
    const inputMensagem = screen.getByRole('textbox', { name: 'Mensagem' });

    //Click on the first input
    fireEvent.click(inputNome);
    userEvent.type(inputNome, 'Nome');
    userEvent.type(inputNome, null);
    fireEvent.click(inputEmail);
    //expect(inputNome.value).toBe('Nome');

    //Click on the second input
    fireEvent.click(inputEmail);
    userEvent.type(inputEmail, 'Email');
    userEvent.type(inputEmail, '');
    fireEvent.click(inputNome);
    //expect(inputEmail.value).toBe('Email');

    //Click on the third input
    fireEvent.click(inputMensagem);
    userEvent.type(inputMensagem, 'Mensagem');
    userEvent.type(inputMensagem, '');
    fireEvent.click(inputNome);
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

  // it('should render click in button submit with text inputs is null', () => {
  //   renderTheme(
  //     <Contact
  //       name={mock.name}
  //       email={mock.email}
  //       message={mock.message}
  //       phone={mock.phone}
  //     />,
  //   );

  //   //Click on button
  //   const inputSubmit = screen.getByRole('button', { name: 'Enviar' });
  //   fireEvent.click(inputSubmit);
  // });
});
