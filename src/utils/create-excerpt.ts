//https://dev.to/jcooke/control-text-excerpt-length-with-js-2m89
//https://ourcodeworld.com/articles/read/376/how-to-strip-html-from-a-string-extract-only-text-content-in-javascript
export const createExcerpt = (content: string): string => {
  let stripedHtml = content.replace(/<[^>]+>/g, '');

  if (stripedHtml.length > 150) {
    stripedHtml = stripedHtml.substring(0, 150) + '...';
  }

  return stripedHtml;
};
