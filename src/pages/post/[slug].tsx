import Head from 'next/head';
// import { GetStaticPaths, GetStaticProps } from 'next';
import { GetStaticPaths } from 'next';
import { useRouter } from 'next/dist/client/router';

import { loadPosts } from 'api/load-data';

import { PostTemplate } from '../../templates/PostTemplate';
import { PostTemplateProps } from 'templates/PostTemplate/type';
// import { PostsTemplateProps } from 'templates/PostsTemplate/type';
import { Loading } from 'templates/Loading';

import { createExcerpt } from 'utils/create-excerpt';
import { PostStrapi } from 'components/Post/type';

export default function PostPage({ post, base }: PostTemplateProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const postArgs = {
    post: post,
    base: base,
  };

  const { title, content } = post;
  const { blogName } = base;

  return (
    <>
      <Head>
        <title>
          {title} - {blogName}
        </title>
        <meta name="description" content={createExcerpt(content)} />
      </Head>
      <PostTemplate {...postArgs} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let data = null;
  let paths = [];

  try {
    data = await loadPosts();
    paths = data.posts.map((post: PostStrapi) => ({
      params: { slug: post.slug },
    }));
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    paths = [];
  }

  return {
    paths,
    fallback: true,
  };
};

// export const getStaticProps: GetStaticProps<PostTemplateProps> = async (
//   ctx,
// ) => {
//   let data = null;

//   try {
//     data = await loadPosts({ postSlug: ctx.params.slug as string });
//   } catch (e) {
//     data = null;
//   }

//   if (!data || !data.posts || !data.posts.length) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       posts: data.posts,
//       setting: data.setting,
//     },
//     revalidate: 24 * 60 * 60,
//   };
// };
