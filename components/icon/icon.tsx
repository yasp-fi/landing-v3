import Image, { ImageProps } from "next/image";
import styled from "styled-components";

interface IconProps {
  $size?: string;
  $borderRadius?: number | string;
}

export const IconImage = styled(Image)<IconProps & Partial<ImageProps>>`
  width: ${(props) => props.$size || `20px`};
  height: ${(props) => props.$size || `20px`};
  border-radius: ${(props) => props.$borderRadius || null};
`;

export const Icon: React.FC<IconProps & Partial<ImageProps>> = (props) => {
  return (
    <IconImage
      width={parseInt(props.$size || "20")}
      height={parseInt(props.$size || "20")}
      {...props}
    />
  );
};
