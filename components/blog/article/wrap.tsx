import styled from 'styled-components';
import { colors, breakPointsConf } from '../../../lib/constants';

export const BlogArticleWrap = styled.div`
  color: ${colors.white};
  font-style: normal;
  width: 768px;
  box-sizing: border-box;
  padding: 48px 16px;
  @media ${breakPointsConf.isMobile} {
    width: 100%;
  }
`;
