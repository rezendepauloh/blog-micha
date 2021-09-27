export type SetHeadingProps = {
  id?: string;
  title?: string;
  items?: { id?: string; title?: string }[];
};

export type TableOfContentsProps = {
  headings?: SetHeadingProps[];
  active?: string;
};
