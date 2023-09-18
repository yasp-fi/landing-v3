import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export type AnimatedCheckMarkIconProps = {
  isActive: boolean;
};

export const AnimatedCheckMarkIcon: React.FC<AnimatedCheckMarkIconProps> = (
  props
) => {
  return (
    <AnimatedCheckMarkIconImg
      {...props}
      src={
        props.isActive ? '/app/checked-vector.svg' : '/app/unchecked-vector.svg'
      }
      width={18}
      height={18}
      alt={'animated check mark'}
    />
  );
};

export const AnimatedCheckMarkIconImg = styled(
  Image
)<AnimatedCheckMarkIconProps>`
  transition: 0.15s ease;
`;
