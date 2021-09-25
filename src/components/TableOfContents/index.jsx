import * as Styled from './styles';
import { useEffect, useState } from 'react';

const getNestedHeadings = (headingElements) => {
  const nestedHeadings = [];

  // console.log('headingElements: ');
  // console.log(headingElements);

  headingElements.forEach((heading) => {
    const { innerText, id } = heading;

    // console.log('heading: ');
    // console.log(heading);
    // console.log('innerText: ');
    // console.log(innerText);
    // console.log('id: ');
    //console.log(id);
    //console.log(heading.attributes.id);

    if (heading.nodeName === 'H2') {
      nestedHeadings.push({ id, innerText, items: [] });
    } else if (heading.nodeName === 'H3' && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        innerText,
      });
    }
  });

  // console.log('nestedHeadings final: ');
  // console.log(nestedHeadings);

  return nestedHeadings;
};

//Criacao em: https://www.emgoto.com/react-table-of-contents/
export const TableOfContents = () => {
  const [nestedHeadings, setNestedHeadings] = useState([]);

  useEffect(() => {
    //SetTimeOut com esse delay de 10ms para dar tempo do anchorJS criar os ids
    setTimeout(() => {
      const headingElements = Array.from(
        document.querySelectorAll('.contentClass h2, .contentClass h3'),
      );

      // console.log('headingElements: ');
      // console.log(headingElements);

      const newNestedHeadings = getNestedHeadings(headingElements);
      setNestedHeadings(newNestedHeadings);
    }, 10);
  }, []);

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
              {heading.innerText}
            </a>
            {heading.items.length > 0 && (
              <ul>
                {' '}
                {heading.items.map((child) => (
                  <li key={child.id}>
                    {' '}
                    <a
                      href={`#${child.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector(`#${heading.id}`)
                          .scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {child.innerText}
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
};
