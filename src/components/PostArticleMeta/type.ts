type Author = {
  id: string;
  displayName: string;
  slug: string;
};

export type Category = {
  id: string;
  displayName: string;
  slug: string;
};

export type PostArticleMetaProps = {
  created_at: string;
  author?: Author;
  category?: Category;
};
