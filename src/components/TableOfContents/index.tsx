import * as Styled from './styles';
import { useEffect, useRef, useState } from 'react';
import { nestedHeadingsInPage } from 'utils/get-nested-headings';

//Criacao em: https://www.emgoto.com/react-table-of-contents/
export const TableOfContents = () => {
  const [nestedHeadings, setNestedHeadings] = useState([]);
  const [activeId, setActiveId] = useState();
  const headingElementsRef = useRef({});

  useEffect(() => {
    //SetTimeOut com esse delay de 10ms para dar tempo do anchorJS criar os ids
    setTimeout(() => {
      const newNestedHeadings = nestedHeadingsInPage();

      setNestedHeadings(newNestedHeadings);

      const callback = (headings) => {
        headingElementsRef.current = headings.reduce((map, headingElement) => {
          map[headingElement.target.id] = headingElement;
          return map;
        }, headingElementsRef.current);

        const visibleHeadings = [];
        Object.keys(headingElementsRef.current).forEach((key) => {
          const headingElement = headingElementsRef.current[key];
          if (headingElement.isIntersecting)
            visibleHeadings.push(headingElement);
        });
        // const getIndexFromId = (id) =>
        //   headingElements.findIndex((heading) => heading.id === id);

        if (visibleHeadings.length === 1) {
          setActiveId(visibleHeadings[0].target.id);
        } else if (visibleHeadings.length > 1) {
          // const sortedVisibleHeadings = visibleHeadings.sort(
          //   (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id),
          // );
          // setActiveId(sortedVisibleHeadings[0].target.id);
          setActiveId(visibleHeadings[0].target.id);
        }
      };

      const observer = new IntersectionObserver(callback, {
        rootMargin: '-110px 0px -40% 0px',
      });

      const headingElements = Array.from(
        document.querySelectorAll('.contentClass h2, .contentClass h3'),
      );
      headingElements.forEach((element) => observer.observe(element));
      return () => observer.disconnect();
    }, 10);
  }, []);

  // if (nestedHeadings.length > 0) {
  return (
    <Styled.Navigation aria-label="Table of contents">
      <Styled.List>
        {nestedHeadings.map((heading) => (
          <li
            key={heading.id}
            className={heading.id === activeId ? 'active' : ''}
          >
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
              <Styled.List>
                {' '}
                {heading.items.map((child: { id: string; title: string }) => (
                  <li
                    key={child.id}
                    className={child.id === activeId ? 'active' : ''}
                  >
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
              </Styled.List>
            )}{' '}
          </li>
        ))}
      </Styled.List>
    </Styled.Navigation>
  );
  // } else {
  //   return null;
  // }
};
