import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const NoAssetIcon = styled.div<{ $size?: string }>`
  width: ${(props) => props.$size ?? `32px`};
  height: ${(props) => props.$size ?? `32px`};
  border-radius: 50%;

  background-color: #7d7d7d;
  color: #fff;

  line-height: 24px;
  font-size: 16px;
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

export const AssetThumbImg = styled(Image)<{ $size?: string }>`
  border-radius: 16px;
  width: ${(props) => props.$size ?? `32px`};
  height: ${(props) => props.$size ?? `32px`};
  display: block;
`;

type AssetThumbProps = {
  link?: string;

  size?: string;
  ticker?: string;
};

export const AssetThumb: React.FC<AssetThumbProps> = ({
  link,
  ticker,
  size,
}) => {
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setIsError(false);
  }, [link]);
  if (isError || !link)
    return <NoAssetIcon $size={size}>{ticker?.[0] ?? ``}</NoAssetIcon>;
  return (
    <AssetThumbImg
      alt={'empty'}
      placeholder={'empty'}
      $size={size}
      src={link}
      onError={() => setIsError(true)}
    />
  );
};
