import styled from 'styled-components';
import { colors } from '../../lib/constants';

const Title = styled.h1`
  font-weight: 700;
  font-size: 72px;
  color: ${colors.white};
`;

export const BlogHeader: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <Title>{children}</Title>;
};
