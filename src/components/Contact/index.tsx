import * as Styled from './styles';

import { useState } from 'react';
// import Link from 'next/link';

// import { Heading } from 'components/Heading';

import { ContactProps } from './type';

//Utilizar esse tutorial para fazer os inputs
//https://itnext.io/how-to-build-a-floating-label-input-field-f9b21669fe2f
//Ou esse:
//https://dev.to/rafacdomin/creating-floating-label-placeholder-for-input-with-reactjs-4m1f

export const Contact = ({ name, email, message }: ContactProps) => {
  const [isActiveName, setIsActiveName] = useState(false);
  const [valueName, setValueName] = useState(name);

  const [isActiveEmail, setIsActiveEmail] = useState(false);
  const [valueEmail, setValueEmail] = useState(email);

  const [isActiveMessage, setIsActiveMessage] = useState(false);
  const [valueMessage, setValueMessage] = useState(message);

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

  return (
    <>
      <Styled.Container>
        <Styled.Row>
          <Styled.Col md={6}>
            <Styled.FloatContainer id="float-label" className="float-container">
              <input
                type="text"
                value={valueName}
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
              <Styled.Button as="input" type="submit" value="Enviar" />
            </Styled.FloatContainer>
          </Styled.Col>
          <Styled.Col md={6}>Outro conteúdo</Styled.Col>
        </Styled.Row>
      </Styled.Container>
    </>
  );
};
