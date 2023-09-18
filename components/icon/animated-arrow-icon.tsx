import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export type AnimatedArrowIconProps = {
  isActive: boolean;
  onClick?: VoidFunction;
};

export const AnimatedArrowIcon: React.FC<AnimatedArrowIconProps> = ({
  isActive,
  onClick,
}) => {
  return (
    <AnimatedArrowIconContainer
      src={'/app/vector-down.svg'}
      isTransformActive={isActive}
      width={18}
      height={18}
      onClick={() => (onClick ? onClick() : undefined)}
      alt={'animated arrow down'}
    />
  );
};

type ContainerProps = {
  isTransformActive: boolean;
};

const AnimatedArrowIconContainer = styled(Image)<ContainerProps>`
  cursor: pointer;
  transition: 0.15s ease;
  transform: ${(props) =>
    props.isTransformActive ? `rotateX(180deg);` : undefined};

  filter: brightness(${(props) => (!props.isTransformActive ? '0.5' : '1')});
`;
