import { SupportedChain } from './types';
import Image from 'next/image';
import styled from 'styled-components';
import { breakPointsConf, colors } from '../../../lib/constants';

const Icon = styled(Image)`
  margin-bottom: 0;
`;

type ContentProps = {
  $shouldLinkToNext: boolean;
  $isAvailable?: boolean;

  $gradientBg?: string;
};

const ChainName = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  white-space: nowrap;
  cursor: default;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

const Content = styled.div<ContentProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  height: 32px;
  border-radius: 16px;
  border: ${(props) => (props.$isAvailable ? undefined : `1px solid #7D7D7D`)};
  background: ${(props) =>
    props.$isAvailable ? props.$gradientBg ?? colors.blue : `transparent`};
  z-index: 11;
  color: ${(props) => (props.$isAvailable ? `#FFFFFF` : `#7D7D7D`)};

  img {
    /* filter: ${(props) =>
    props.$isAvailable ? `grayscale(0%)` : `grayscale(100%)`};
    opacity: ${(props) => (props.$isAvailable ? `1` : `.4`)}; */
  }

  @media (max-width: 550px) {
    ${ChainName} {
      display: none;
    }

    padding: 8px;
  }
`;

export const ChainCard = ({
  chain,
  $shouldLinkToNext: shouldLinkToNext,
  $gradientBg: gradientBg,
}: { chain: SupportedChain } & ContentProps) => {
  return (
    <Content
      $isAvailable={chain.isSupported}
      $gradientBg={gradientBg}
      $shouldLinkToNext={shouldLinkToNext}
    >
      <Icon src={chain.notAvailableLogo ? chain.notAvailableLogo : chain.logo} width={32} height={32} alt={chain.name} />
      <ChainName>{chain.name}</ChainName>
    </Content>
  );
};
