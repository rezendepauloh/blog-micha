type SetHeadingProps = {
  id?: string;
  title?: string;
  items?: { id?: number; title?: string }[];
};

export type TableOfContentsProps = {
  headings?: SetHeadingProps[];
};
