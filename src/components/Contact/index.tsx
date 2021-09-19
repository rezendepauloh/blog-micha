import * as Styled from './styles';
// import Link from 'next/link';

import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp';

import { useState } from 'react';

import { ContactProps } from './type';

//Utilizar esse tutorial para fazer os inputs
//https://dev.to/rafacdomin/creating-floating-label-placeholder-for-input-with-reactjs-4m1f
//Utilizar esse para o API do envio de email:
//https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645

export const Contact = ({ name, email, message, phone }: ContactProps) => {
  const [isActiveName, setIsActiveName] = useState(false);
  const [valueName, setValueName] = useState(name);

  const [isActiveEmail, setIsActiveEmail] = useState(false);
  const [valueEmail, setValueEmail] = useState(email);

  const [isActiveMessage, setIsActiveMessage] = useState(false);
  const [valueMessage, setValueMessage] = useState(message);

  const [submitted, setSubmitted] = useState(false);

  const target = '_blank';

  const handleTextChange = (text: string, name: string) => {
    if (name == 'name') {
      setValueName(text);

      if (text !== '') {
        setIsActiveName(true);
      } else {
        setIsActiveName(false);
      }
    }
    if (name == 'email') {
      setValueEmail(text);

      if (text !== '') {
        setIsActiveEmail(true);
      } else {
        setIsActiveEmail(false);
      }
    }
    if (name == 'message') {
      setValueMessage(text);

      if (text !== '') {
        setIsActiveMessage(true);
      } else {
        setIsActiveMessage(false);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    console.log('Sending');

    const data = {
      name,
      email,
      message,
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received');

      if (res.status === 200) {
        console.log('Response succeeded!');
        setSubmitted(true);
        setValueName('');
        setValueEmail('');
        setValueMessage('');
      }
    });
  };

  return (
    <>
      <Styled.Container>
        <Styled.Row>
          <Styled.Col md={6}>
            <form>
              <Styled.FloatContainer
                id="float-label"
                className="float-container"
              >
                <input
                  type="text"
                  value={valueName}
                  name="name"
                  onChange={(e) => handleTextChange(e.target.value, 'name')}
                  id="floatField1"
                />
                <label
                  className={isActiveName ? 'Active' : ''}
                  htmlFor="floatField1"
                >
                  Nome
                </label>
              </Styled.FloatContainer>

              <Styled.FloatContainer
                id="float-label-2"
                className="float-container"
              >
                <input
                  type="email"
                  value={valueEmail}
                  name="email"
                  onChange={(e) => handleTextChange(e.target.value, 'email')}
                  id="floatField2"
                />
                <label
                  className={isActiveEmail ? 'Active' : ''}
                  htmlFor="floatField2"
                >
                  Email
                </label>
              </Styled.FloatContainer>
              <Styled.FloatContainer
                id="float-label-3"
                className="float-container"
              >
                <textarea
                  value={valueMessage}
                  name="message"
                  onChange={(e) => handleTextChange(e.target.value, 'message')}
                  id="floatField3"
                />
                <label
                  className={isActiveMessage ? 'Active' : ''}
                  htmlFor="floatField3"
                >
                  Mensagem
                </label>
              </Styled.FloatContainer>
              <Styled.FloatContainer>
                <Styled.Button
                  as="input"
                  type="submit"
                  onClick={(e: React.FormEvent<EventTarget>) => {
                    submitted;
                    handleSubmit(e);
                  }}
                  value="Enviar"
                />
              </Styled.FloatContainer>
            </form>
          </Styled.Col>
          <Styled.Col md={6}>
            {phone.map((p) => {
              const replaceOwner = p.owner.replace(' ', '%20');
              const replacePhone = p.phone.replace(
                /\((\d{2})\)\s\d(\d{4})-(\d{4})/g,
                '$1$2$3',
              );
              const url = `https://api.whatsapp.com/send?phone=55${replacePhone}&text=Olá,%20${replaceOwner}`;
              return (
                <Styled.LinkContact
                  key={p.phone}
                  href={url}
                  target={target}
                  block
                >
                  <Whatsapp aria-label="Whatsapp" /> Entre em contato com{' '}
                  {p.owner}
                </Styled.LinkContact>
              );
            })}
          </Styled.Col>
        </Styled.Row>
      </Styled.Container>
    </>
  );
};
