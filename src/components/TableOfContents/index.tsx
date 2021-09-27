import * as Styled from './styles';

import { TableOfContentsProps } from './type';

//Criacao em: https://www.emgoto.com/react-table-of-contents/
export const TableOfContents = ({
  headings = [],
  active = '',
}: TableOfContentsProps) => {
  return (
    <Styled.Navigation aria-label="Table of contents">
      <Styled.List>
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={heading.id === active ? 'active' : ''}
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
                {heading.items.map((child) => (
                  <li
                    key={child.id}
                    className={child.id === active ? 'active' : ''}
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
};
