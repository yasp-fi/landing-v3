// import { BlogHeader } from '../../components/blog/header';
// import { LandingContentBlock } from '../../components/landing-content-block/landing-content-block';
// import LayoutWithFill from '../../components/layout-with-fill';
// import PostsSection from '../../components/blog/posts-section';
// import Post from '../../components/blog/post';

// import { JoinUsCallout } from '../../components/layout/join-us-call-out';
// import { getAllPublishedBlogPosts } from '../../lib/blog/repository';
// import { BlogPost } from '@yasp/models';
// import { NextPage } from 'next';

// type BlogPageProps = {
//   posts: BlogPost[];
// };

// const BlogPage: NextPage<BlogPageProps> = ({ posts }) => {
//   return (
//     <>
//       <LandingContentBlock>
//         <BlogHeader>Blog</BlogHeader>
//       </LandingContentBlock>

//       <LayoutWithFill color={`#2c3542`}>
//         <LandingContentBlock>
//           <PostsSection title={'Latest posts'}>
//             {posts.map((post) => (
//               <Post
//                 id={post.id}
//                 title={post.title}
//                 key={post.id}
//                 date={post.createdAt!.toLocaleString()}
//                 path={`/blog/article/${post.id}`}
//                 thumbnail={'yasp-init.png'}
//               />
//             ))}
//           </PostsSection>
//         </LandingContentBlock>
//       </LayoutWithFill>
//       <JoinUsCallout />
//     </>
//   );
// };

// export async function getStaticProps() {
//   const posts = await getAllPublishedBlogPosts();

//   return {
//     props: {
//       posts,
//     },
//   };
// }

// export default BlogPage;
export default function BlogPage() {
  return <></>
};
