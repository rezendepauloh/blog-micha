import * as Styled from './styles';
import { Heading } from 'components/Heading';
// import Link from 'next/link';

import { useState } from 'react';

import { HomeSpecialtiesProps } from './type';

export function HomeSpecialties({
  title,
  content,
  linkSpecialty,
}: HomeSpecialtiesProps) {
  //Para o map no modal
  //https://stackoverflow.com/questions/45536886/render-multiple-modals-correctly-with-map-in-react-bootstrap/45536984
  const [activeModal, setActiveModal] = useState(null);

  const clickHandler = (index: number): void => {
    setActiveModal(index);
  };

  const hideModal = (): void => {
    setActiveModal(null);
  };

  return (
    <Styled.Jumbotron fluid>
      <Heading uppercase as="h2" size="medium" colorDark={true}>
        {title}
      </Heading>
      <p>{content}</p>

      <p>
        {linkSpecialty.map((s, i) => {
          const key = `${s.specialty}`.replace(/\s/g, '');
          return (
            <span key={key}>
              <Styled.Button
                data-toggle="modal"
                data-target={`#Modal-Specialty-${i}`}
                onClick={() => clickHandler(i)}
                size="lg"
              >
                {s.specialty}
              </Styled.Button>

              <Styled.Modal
                id={`#Modal-Specialty-${i}`}
                show={activeModal === i}
                onHide={hideModal}
                backdrop="static"
                keyboard={true}
                size="lg"
                aria-labelledby={`modal-${i}`}
              >
                <Styled.Header closeButton>
                  <Styled.Title id={`modal-${i}`}>
                    <Heading uppercase as="h4" size="xsmall" colorDark={false}>
                      {s.specialty}
                    </Heading>
                  </Styled.Title>
                </Styled.Header>
                <Styled.Body dangerouslySetInnerHTML={{ __html: s.content }} />
              </Styled.Modal>
            </span>
          );
        })}
      </p>
    </Styled.Jumbotron>
  );
}
