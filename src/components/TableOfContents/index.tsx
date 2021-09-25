import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { nestedHeadingsInPage } from 'utils/get-nested-headings';

//Criacao em: https://www.emgoto.com/react-table-of-contents/
export const TableOfContents = () => {
  const [nestedHeadings, setNestedHeadings] = useState([]);

  useEffect(() => {
    //SetTimeOut com esse delay de 10ms para dar tempo do anchorJS criar os ids
    setTimeout(() => {
      const newNestedHeadings = nestedHeadingsInPage();

      setNestedHeadings(newNestedHeadings);
    }, 10);
  }, []);

  if (nestedHeadings.length > 0) {
    return (
      <Styled.Navigation aria-label="Table of contents">
        <ul>
          {nestedHeadings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(`#${heading.id}`)
                    .scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {heading.title}
              </a>
              {heading.items.length > 0 && (
                <ul>
                  {' '}
                  {heading.items.map((child: { id: string; title: string }) => (
                    <li key={child.id}>
                      {' '}
                      <a
                        href={`#${child.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .querySelector(`#${child.id}`)
                            .scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        {child.title}
                      </a>{' '}
                    </li>
                  ))}{' '}
                </ul>
              )}{' '}
            </li>
          ))}
        </ul>
      </Styled.Navigation>
    );
  }
};
