import { breakPointsConf } from '../../lib/constants';
import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
  margin: auto;
  max-width: 1140px;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  overflow: visible;

  @media ${breakPointsConf.isTablet} {
    max-width: calc(100% - 200px);
    overflow: hidden;
  }

  @media (max-width: 1100px) {
    max-width: calc(100% - 48px);
    overflow: hidden;
  }

  @media ${breakPointsConf.isMobile} {
    max-width: calc(100% - 40px);
  }
`;

export const LandingContentBlock = Content;
