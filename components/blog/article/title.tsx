'use client';

import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-style: normal;
  font-size: 32px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.8px;
  margin-top: 32px;
  margin-bottom: 12px;
`;

export const BlogArticleTitle = ({ children }: React.PropsWithChildren) => {
  return <Title>
    {children}
  </Title>;
};
