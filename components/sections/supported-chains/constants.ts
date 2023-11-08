import {SupportedChain} from './types';
import {ChainNativeSymbols} from '@yasp/models';

export const chainData: SupportedChain[] = [
  {
    name: 'Arbitrum',
    type: ChainNativeSymbols.Arbitrum,
    logo: '/sections/supported-chains/icons/arbitrum.svg',
    gradientBg: 'linear-gradient(270deg, #1474B5 0%, #98BFDD 100%);',
    isSupported: true,
    platforms: { desktop: true, mobile: false },
  },
  {
    name: 'Gnosis',
    type: ChainNativeSymbols.xDAI,
    logo: '/sections/supported-chains/icons/gnosis.svg',
    gradientBg: 'linear-gradient(270deg, #133629 0%, #008970 100%);',
    isSupported: true,
    platforms: { desktop: true, mobile: false },
  },
  {
    name: 'Bitcoin',
    // @ts-ignore
    type: ChainNativeSymbols.Bitcoin,
    logo: '/sections/supported-chains/icons/bitcoin.svg',
    notAvailableLogo: '/sections/supported-chains/icons/bitcoin-notAvailable.svg',
    isSupported: false,
    platforms: { desktop: false, mobile: false },
  },
  {
    name: 'zkSync Era',
    type: ChainNativeSymbols.ZkSync,
    logo: '/sections/supported-chains/icons/zkSync.svg',
    notAvailableLogo: '/sections/supported-chains/icons/zkSync-notAvailable.svg',
    gradientBg: 'linear-gradient(270deg, #9C7BEE 0%, #516AE8 100%)',
    isSupported: false,
    platforms: { desktop: true, mobile: false },
  },
  {
    name: "BNB Chain",
    type: ChainNativeSymbols.BinanceSmartChain,
    logo: '/sections/supported-chains/icons/binance.svg',
    gradientBg: 'linear-gradient(270deg, #CC9A1F -0.32%, #FEDB84 100%);',
    isSupported: true,
    platforms: { desktop: true, mobile: false },
  },
  {
    name: 'Fantom',
    type: ChainNativeSymbols.Fantom,
    logo: '/sections/supported-chains/icons/fantom.svg',
    gradientBg: 'linear-gradient(270deg, #3B64EA -0.37%, #1792BB 100%);',
    isSupported: true,
    platforms: { desktop: true, mobile: false },
  },
  {
    name: 'Ethereum',
    type: ChainNativeSymbols.Ethereum,
    logo: '/sections/supported-chains/icons/ethereum.svg',
    gradientBg: 'linear-gradient(270deg, #353535 -0.34%, #9E9E9E 100%);',
    isSupported: true,
    platforms: { desktop: true, mobile: false },
  },
  {
    name: 'Optimism',
    type: ChainNativeSymbols.Optimism,
    logo: '/sections/supported-chains/icons/optimism.svg',
    gradientBg: 'linear-gradient(270deg, #FF0420 -0.33%, #DA6868 100%);',
    isSupported: true,
    platforms: { desktop: true, mobile: false },
  },
  {
    name: 'Polygon',
    type: ChainNativeSymbols.Polygon,
    logo: '/sections/supported-chains/icons/polygon.svg',
    gradientBg: 'linear-gradient(90deg, #B285FF 0.37%, #6327CA 100%);',
    isSupported: true,
    platforms: { desktop: true, mobile: false },
  },
  {
    name: 'Avalanche',
    type: ChainNativeSymbols.Avalanche,
    logo: '/sections/supported-chains/icons/avalanche.svg',
    gradientBg: 'linear-gradient(270deg, #E84142 -0.32%, #FF8383 100%);',
    isSupported: true,
    platforms: { desktop: true, mobile: false },
  },
  {
    name: 'Linea',
    type: ChainNativeSymbols.Linea,
    logo: `/sections/supported-chains/icons/linea.svg`,
    gradientBg: `linear-gradient(270deg, #3F3F3F 0%, #D2D2D2 100%);`,
    isSupported: true,
    platforms: { desktop: true, mobile: false }
  },
  {
    name: 'zkEVM',
    type: ChainNativeSymbols.PolygonZKEVM,
    logo: '/sections/supported-chains/icons/polygon-zkevm.svg',
    gradientBg: 'linear-gradient(90deg, #D3B4D0 0%, #7B3BE7 100%);',
    isSupported: true,
    platforms: { desktop: true, mobile: false }
  },
  {
    name: 'Base',
    type: ChainNativeSymbols.Base,
    logo: '/sections/supported-chains/icons/base.svg',
    gradientBg: `linear-gradient(270deg, #1652F0 0%, #93AFF9 100%);`,
    isSupported: true,
    platforms: { desktop: true, mobile: false }
  },
  {
    name: 'Shardeum',
    type: ChainNativeSymbols.Shardeum,
    logo: '/sections/supported-chains/icons/shardeum.svg',
    notAvailableLogo: '/sections/supported-chains/icons/shardeum-notAvailable.svg',
    gradientBg: `linear-gradient(270deg, #0E0E0E 0%, #4D4D4D 100%);`,
    isSupported: false,
    platforms: { desktop: false, mobile: false },
  },
  {
    name: 'Scroll',
    type: ChainNativeSymbols.Scroll,
    logo: `/sections/supported-chains/icons/scroll.svg`,
    gradientBg: `linear-gradient(270deg, #3F3F3F 0%, #EBC28E 100%);`,
    isSupported: true,
    platforms: { desktop: true, mobile: false },
  }
  // {
  //   name: 'Aptos',
  //     // @ts-ignore
  //     type: ChainNativeSymbols.Aptos,
  //   logo: '/sections/supported-chains/icons/aptos.svg',
  //   isSupported: false,
  //   providerFilters: { desktop: false, mobile: false },
  // },
]
