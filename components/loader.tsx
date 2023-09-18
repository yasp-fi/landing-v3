import React from 'react';
import { ColorRing } from 'react-loader-spinner';
import { BaseProps } from 'react-loader-spinner/dist/type';

export type RingLoaderProps = Omit<BaseProps, 'color'> & {
  colors?: [string, string, string, string, string];
};

export const RingLoader: React.FC<RingLoaderProps> = ({
  colors,
  width,
  height,
  visible,
  ...restProps
}) => {
  return (
    <ColorRing
      colors={colors}
      width={width}
      height={height}
      visible={visible}
      {...restProps}
    />
  );
};
