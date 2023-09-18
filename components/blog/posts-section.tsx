import React from 'react';
import styled from 'styled-components';

import { LandingContentBlock } from '../landing-content-block/landing-content-block';

import { breakPointsConf } from '../../lib/constants';

type Props = {
  title: string;
};

const BlogPosts: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  children,
}) => {
  return (
    <>
      <PostsMain>
        <BlogSubtitle>{title}</BlogSubtitle>
        <LandingContentBlock>
          <Posts>{children}</Posts>
        </LandingContentBlock>
      </PostsMain>
      <Hr />
    </>
  );
};

export default BlogPosts;

const PostsMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 64px;
`;

const BlogSubtitle = styled.h2`
  font-style: normal;
  font-size: 32px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.8px;
  color: #ffffff;

  align-self: flex-start;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media ${breakPointsConf.isMobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Hr = styled.div`
  height: 1px;
  background: #384455;
  margin-top: 48px;
  width: 100%;

  &:last-child {
    display: none;
  }
`;
