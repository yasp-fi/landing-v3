// import ReactMarkdown from 'react-markdown';
// import {
//   getAllPublishedBlogPosts,
//   getPostById,
// } from '../../../../lib/blog/repository';
// import { BlogArticleWrap } from '../../../../components/blog/article/wrap';
// import Image from 'next/image';
// import { AdaptiveWrapper } from '../../../../components/layout/adaptive-img-wrapper';
// import { RowWrapper } from '../../../../components/layout/row-wrapper';
// import { Keyword } from '../../../../components/blog/article/keyword';
// import { BlogArticleTitle } from '../../../../components/blog/article/title';
// import { BlogPost } from '@yasp/models';
// import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
// import { ParsedUrlQuery } from 'querystring';

// type BlogArticleDetailProps = {
//   post: BlogPost;
// };

// const BlogArticleDetail: NextPage<BlogArticleDetailProps> = ({ post }) => {
//   const date = new Date(post.createdAt ?? Date.now());
//   return (
//     <BlogArticleWrap>
//       <AdaptiveWrapper>
//         <Image src={`/img-blog/yasp-init.png`} alt={'blog-image'} fill />
//       </AdaptiveWrapper>
//       <RowWrapper>
//         <BlogArticleTitle>{post.title}</BlogArticleTitle>
//       </RowWrapper>
//       <RowWrapper>
//         <Keyword>
//           <span>
//             {date.toLocaleString('default', { month: 'long' }) +
//               ` ` +
//               date.getDay() +
//               `, ` +
//               date.getFullYear()}
//           </span>
//         </Keyword>
//       </RowWrapper>
//       <ReactMarkdown>{post.content}</ReactMarkdown>
//     </BlogArticleWrap>
//   );
// };

// interface StaticPropsParams extends ParsedUrlQuery {
//   slug: string;
// }

// export const getStaticPaths: GetStaticPaths<StaticPropsParams> = async () => {
//   const posts = await getAllPublishedBlogPosts();
//   const paths: { params: StaticPropsParams }[] = posts.map((post) => ({
//     params: { slug: post.id },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps<
//   BlogArticleDetailProps,
//   StaticPropsParams
// > = async ({ params }) => {
//   const { slug } = params ?? {};

//   if (!slug) {
//     return {
//       notFound: true,
//     };
//   }

//   const post: BlogPost = await getPostById(slug);

//   if (!post) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       post,
//     },
//   };
// };

// export default BlogArticleDetail;
export default function BlogArticleDetail() {
  return <></>
};