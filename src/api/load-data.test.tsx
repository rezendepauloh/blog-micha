import {
  loadAbout,
  loadContact,
  loadNotFound,
  loadHome,
  loadPost,
  loadPosts,
  loadPostsWithFilter,
} from './load-data';

jest.mock('graphql-request');

describe('load-data', () => {
  it('should call request loadHome', async () => {
    await loadHome();
  });

  it('should call request loadAbout', async () => {
    await loadAbout();
  });

  it('should call request loadNotFound', async () => {
    await loadNotFound();
  });

  it('should call request loadContact', async () => {
    await loadContact();
  });

  it('should call request loadPosts', async () => {
    await loadPosts();
  });

  it('should call request loadPost', async () => {
    await loadPost();
  });

  it('should call request loadPostsWithFilter', async () => {
    await loadPostsWithFilter();
  });
});
