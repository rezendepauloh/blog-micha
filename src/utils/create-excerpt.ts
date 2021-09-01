//https://dev.to/jcooke/control-text-excerpt-length-with-js-2m89
//https://ourcodeworld.com/articles/read/376/how-to-strip-html-from-a-string-extract-only-text-content-in-javascript
//https://stackoverflow.com/questions/33269131/how-to-replace-nbsp-with-whitespace-in-javascript/33269453
export const createExcerpt = (content: string): string => {
  let stripedHtml = content.replace(/<[^>]+>/g, '');
  stripedHtml = stripedHtml.replace(/\u00a0/g, ' ');
  stripedHtml = stripedHtml.replace(/&nbsp;/gi, ' ');

  if (stripedHtml.length > 150) {
    stripedHtml = stripedHtml.substring(0, 150) + '...';
  }

  return stripedHtml;
};

export const createExcerptInPostItem = (content: string): string => {
  let stripedHtml = content.replace(/<[^>]+>/g, '');
  stripedHtml = stripedHtml.replace(/\u00a0/g, ' ');
  stripedHtml = stripedHtml.replace(/&nbsp;/gi, ' ');

  if (stripedHtml.length > 550) {
    stripedHtml = stripedHtml.substring(0, 550) + '...';
  }

  return stripedHtml;
};
