// import { screen } from '@testing-library/react';
// import { renderTheme } from 'styles/render-theme';
// import { Post } from '.';
// import { PostProps } from './type';

// import mock from './mock';
// import { formatDate } from 'utils/format-date';
// import { createExcerpt } from 'utils/create-excerpt';

// const props: PostProps = mock;

// describe('<Post />', () => {
//   it('should render header, excerpt, cover, metadata and post', () => {
//     const { container } = renderTheme(<Post {...props} />);

//     expect(
//       screen.getByRole('heading', { name: props.title }),
//     ).toBeInTheDocument();
//     expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument();
//     expect(screen.getAllByText(createExcerpt(props.content))[0]).toHaveStyle({
//       'font-size': '2.4rem',
//     });
//     expect(screen.getByText(formatDate(props.created_at))).toBeInTheDocument();

//     expect(container).toMatchSnapshot();
//   });
// });

export default [];
