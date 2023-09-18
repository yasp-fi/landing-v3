import React from 'react';
import styled from 'styled-components';
import { ChainNativeSymbols } from '@yasp/models';
import { AssetThumb } from '../asset/thumb';
import { buildMonolithStaticFileUrl } from '../../lib/constants';

type ChainIconProps = {
  name: ChainNativeSymbols;
  setChain?: VoidFunction;
  size?: string;
  isActive?: boolean;
  layoutMargin?: string;
};

const ChainIconLayout = styled.div<{ $margin: string }>`
  margin: ${({ $margin: margin }) => margin};
  cursor: pointer;
  position: relative;
`;

const SelectedIcon = styled.img`
  display: block;
  position: absolute;
  bottom: 1px;
  left: 15px;
  right: 0;
`;

const Selected = () => <SelectedIcon src={`/app/icons/green-check-mark.svg`} />;

export const networkNameAdapter = (name: ChainNativeSymbols) => {
  switch (name) {
    case ChainNativeSymbols.Avalanche:
      return `avalanche`;
    case ChainNativeSymbols.Moonbeam:
      return `moonbeam`;
    case ChainNativeSymbols.Moonriver:
      return `moonriver`;
    case ChainNativeSymbols.xDAI:
      return `gnosis`;
    case ChainNativeSymbols.Aptos:
      return `aptos`;
    case ChainNativeSymbols.Tron:
      return `tron`;
    case ChainNativeSymbols.Cronos:
      return `cronos`;
    case ChainNativeSymbols.Aurora:
      return `aurora`;
    case ChainNativeSymbols.Solana:
      return 'solana';
    case ChainNativeSymbols.Ethereum:
      return 'ethereum';
    case ChainNativeSymbols.BinanceSmartChain:
      return 'bsc';
    case ChainNativeSymbols.Polygon:
      return 'polygon';
    case ChainNativeSymbols.Fantom:
      return 'fantom';
    case ChainNativeSymbols.Arbitrum:
      return 'arbitrum';
    case ChainNativeSymbols.ZkSync:
      return 'zksync';
    case ChainNativeSymbols.Optimism:
      return `optimism`;
    default:
      return ``;
  }
};

export const ChainIcon: React.FC<ChainIconProps> = ({
  size,
  name,
  setChain,
  isActive,
  layoutMargin = '0 12px 0 0',
}) => {
  return (
    <ChainIconLayout onClick={setChain} $margin={layoutMargin}>
      <AssetThumb
        size={size || `24px`}
        ticker={name}
        link={buildMonolithStaticFileUrl(`chain/${networkNameAdapter(name)}`)}
      />
      {isActive && setChain && <Selected />}
    </ChainIconLayout>
  );
};
