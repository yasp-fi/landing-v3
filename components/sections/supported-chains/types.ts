import { ChainNativeSymbols } from '@yasp/models';

export type SupportedPlatforms = {
  mobile: boolean;
  desktop: boolean;
}

export type SupportedChain = {
  name: string;
  type: ChainNativeSymbols;
  logo: string;
  gradientBg?: string;
  notAvailableLogo?: string;
  isSupported: boolean;
  platforms?: Partial<SupportedPlatforms>
}

