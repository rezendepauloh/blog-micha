// import { screen } from '@testing-library/react';
// import { renderTheme } from 'styles/render-theme';
// import { PostArticleMeta } from '.';
// import { PostArticleMetaProps } from './type';

// import mock from './mock';

// const props: PostArticleMetaProps = mock;

// describe('<PostArticleMeta />', () => {
//   it('should render author and category links', () => {
//     renderTheme(<PostArticleMeta {...props} />);

//     expect(
//       screen.getByRole('link', { name: 'Otávio Miranda' }),
//     ).toHaveAttribute('href', '/author/otavio-miranda');
//     expect(screen.getByRole('link', { name: 'Tech' })).toHaveAttribute(
//       'href',
//       '/category/tech',
//     );
//     expect(screen.getByRole('link', { name: 'JS' })).toHaveAttribute(
//       'href',
//       '/category/javascript',
//     );
//   });

//   it('should format date', () => {
//     renderTheme(<PostArticleMeta {...props} />);

//     expect(screen.getByText('2 de mar. de 2021')).toHaveAttribute(
//       'datetime',
//       props.createdAt,
//     );
//   });

//   it('should match snapshot', () => {
//     const { container } = renderTheme(<PostArticleMeta {...props} />);
//     expect(container).toMatchSnapshot();
//   });

//   it('should match snapshot with no author and categories', () => {
//     const { container } = renderTheme(
//       <PostArticleMeta {...props} author={undefined} category={undefined} />,
//     );
//     expect(container).toMatchSnapshot();
//   });
// });

export {};
