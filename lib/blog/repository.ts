import { BlogPost } from '@yasp/models';

import { db } from '../../db';

const blogPostTable = db.table('blog_post');

type BlogPostSnakeCase = {
  id: string;
  title: string;
  content: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}


function snakeToCamelCase(obj: BlogPostSnakeCase): BlogPost {
  return new BlogPost({
    id: obj.id,
    title: obj.title,
    content: obj.content,
    isPublished: obj.is_published,
    createdAt: new Date(obj.created_at),
    updatedAt: new Date(obj.updated_at),
  })
}

export async function getAllPublishedBlogPosts(): Promise<BlogPost[]> {
  const blogPosts = await blogPostTable.withSchema('public').select<BlogPostSnakeCase[]>('*').where({ is_published: true });

  return blogPosts.map(snakeToCamelCase);
}

export async function getPostById(id: string): Promise<BlogPost> {
  const [blogPost] = await blogPostTable.withSchema('public').select<BlogPostSnakeCase[]>('*').where({ id }).limit(1);

  if (!blogPost) {
    throw new Error(`Blog post with id ${id} not found`);
  }

  return snakeToCamelCase(blogPost);
}
