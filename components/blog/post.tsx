'use client';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

type PostProps = {
  thumbnail: string | StaticImageData;
  title: string;
  date: string;
  id: string;
  path: string;
};

const BlogPost = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  cursor: pointer;
  text-decoration: none;
  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;

const PostTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
  margin: 0;
`;

const PostDate = styled.span`
  position: relative;
  bottom: 10px;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #7d7d7d;
`;

const Post: React.FC<PostProps> = ({ date, thumbnail, title, path }) => {
  return (
    <BlogPost prefetch={true} href={path}>

      <Image alt={title} src={`/img-blog/` + thumbnail} fill />

      <PostTitle>{title}</PostTitle>
      <PostDate>{date}</PostDate>
    </BlogPost>
  );
};

export default Post;
