import Image, { ImageProps } from 'next/image';
import styled from 'styled-components';

interface IconProps {
  $size?: string;
  $borderRadius?: number | string;
}

export const Icon = styled.img<IconProps & Partial<ImageProps>>`
  width: ${(props) => props.$size || `20px`};
  height: ${(props) => props.$size || `20px`};
  border-radius: ${(props) => props.$borderRadius || null};
`;
