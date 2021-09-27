import * as Styled from './styles';

import { useEffect, useRef, useState } from 'react';

import { Base } from 'templates/Base';

import { Post } from 'components/Post';
import { PostTags } from 'components/PostTags';
import { Heading } from 'components/Heading';
import { TableOfContents } from 'components/TableOfContents';

import AnchorJS from 'anchor-js';
import { nestedHeadingsInPage } from 'utils/get-nested-headings';

import { PostTemplateProps } from './type';

export function PostTemplate({
  post,
  base,
  headings = [],
  activeHeading = '',
}: PostTemplateProps) {
  const [nestedHeadings, setNestedHeadings] = useState(headings);
  const [activeId, setActiveId] = useState(activeHeading);
  const headingElementsRef = useRef({});

  //Para resolver a adição do id no h2 e h3 depois da página estar carregada
  //https://dev.to/typicoul/fixing-next-js-referenceerror-document-is-not-defined-2jgi
  //https://stackoverflow.com/questions/52344726/how-to-dynamicly-add-class-and-id-to-specific-tag-using-javascript-jquery
  useEffect(() => {
    const anchors = new AnchorJS();
    anchors.add('.contentClass h2, .contentClass h3, .contentClass h4');

    const newNestedHeadings = nestedHeadingsInPage();

    setNestedHeadings(newNestedHeadings);
  }, []);

  useEffect(() => {
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      const visibleHeadings = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
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
  }, [setActiveId]);

  //console.log(nestedHeadings);

  return (
    <Base base={base}>
      <Styled.Container fluid>
        <Styled.TitleContainer>
          <Heading as="h1" colorDark={false} size="medium" uppercase>
            Publicações
          </Heading>
        </Styled.TitleContainer>

        <Styled.Row xs={1} sm={1} md={12} lg={12}>
          {/* {nestedHeadings.length < 0 && ( */}
          <>
            <Styled.Col
              xs={{ order: 'first' }}
              md={12}
              lg={{ span: 2, order: 'last' }}
            >
              <TableOfContents headings={nestedHeadings} active={activeId} />
            </Styled.Col>

            <Styled.Col md={12} lg={{ span: 10, order: 'first' }}>
              <Post {...post} />

              <Styled.TagsContainer>
                <PostTags tags={post.tags} />
              </Styled.TagsContainer>
            </Styled.Col>
          </>
          {/*})}*/}
        </Styled.Row>
      </Styled.Container>
    </Base>
  );
}
