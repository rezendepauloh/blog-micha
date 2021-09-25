const getNestedHeadings = (headingElements: Element[]) => {
  const nestedHeadings = [];

  headingElements.forEach((heading: HTMLHeadingElement) => {
    const { innerText: title, id, nodeName } = heading;

    if (nodeName === 'H2') {
      nestedHeadings.push({ id, title, items: [] });
    } else if (nodeName === 'H3' && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
      });
    }
  });

  return nestedHeadings;
};

export const nestedHeadingsInPage = (): Element[] => {
  const headingElements: Element[] = Array.from(
    document.querySelectorAll('.contentClass h2, .contentClass h3'),
  );

  const newNestedHeadings = getNestedHeadings(headingElements);

  return newNestedHeadings;
};
