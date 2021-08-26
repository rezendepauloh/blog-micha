type Author = {
  id: string;
  displayName: string;
  slug: string;
};

type Category = {
  id: string;
  displayName: string;
  slug: string;
};

export type PostArticleMetaProps = {
  createdAt: string;
  author?: Author;
  category?: Category;
};
