'use client';
import React from 'react';
import styled from 'styled-components';
import { LandingContentBlock } from '../../landing-content-block/landing-content-block';
import { SupportedChain } from './types';
import { ChainCard } from './chain-card';
import { chainData } from './constants';
import { breakPointsConf, colors } from '../../../lib/constants';
import { Row } from '../../kit/layout';
import { Reg16x24 } from '../../kit/typography';

import ellipseBackground from '/public/sections/supported-chains/ellipse.svg';

type SupportedChainsProps = {
  supportedChains?: SupportedChain[];
};

const Wrap = styled.div`
  padding-top: 128px;

  @media (max-width: 1600px) {
    padding-top: 112px;
  }

  @media (max-width: 768px) {
    padding-top: 64px;
  }

  @media (max-width: 520px) {
    padding-top: 56px;
  }
`;

const SupportedChainResponsiveContainer = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 24px;
  column-gap: 16px;
  max-width: 940px;
  margin: auto;

  @media (max-width: 1280px) {
    padding: 20px 0;
  }

  @media (max-width: 1280px) {
    padding: 16px 0;
  }
`;

const Title = styled.h3<{ $textAlign?: string }>`
  font-style: normal;
  font-size: 32px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.8px;
  text-align: ${(props) => props.$textAlign ?? `center`};
  color: ${colors.white};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 31px;
  }

  @media (max-width: 420px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const ChainDescription = styled(Row)`
  justify-content: center;
  gap: 12px;
  padding-bottom: 128px;

  @media (max-width: 1600px) {
    padding-bottom: 112px;
  }

  @media (max-width: 768px) {
    padding-bottom: 64px;
  }

  @media (max-width: 520px) {
    padding-bottom: 56px;
  }

  span {
    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

const Description = styled.p<{ $textAlign?: string }>`
  font-size: 20px;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: -0.4px;
  text-align: ${(props) => props.$textAlign ?? `center`};
  color: ${colors.white};

  white-space: pre-wrap;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 27px;
    margin-bottom: 0;
  }
`;

const SupportedChainsContentBlock = styled(LandingContentBlock)`
  padding: 0;
  background-image: url('${ellipseBackground.src}');
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: -16px;
  background-size: 800px 800px;

  @media (max-width: 1280px) {
    max-width: calc(100% - 200px);
    overflow: hidden;
    background-size: 700px 700px;
  }

  @media (max-width: 1100px) {
    max-width: calc(100% - 48px);
    background-position-y: -30px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 20px;
    background-position-y: -60px;
  }

  @media (max-width: 550px) {
    background-position-y: -55px;
    background-size: 600px 600px;
  }
`;

export function SupportedChainsSection({
  supportedChains = chainData,
}: SupportedChainsProps) {
  return (
    <SupportedChainsContentBlock>
      <Wrap>
        <Title>The Future is Multichain</Title>
        <Description>
          12+ supported networks for a one-stop DeFi experience
        </Description>
        <SupportedChainResponsiveContainer>
          {supportedChains.map((chain, i) => {
            const nextIsSupported = supportedChains[i + 1]?.isSupported;
            return (
              <ChainCard
                key={chain.name}
                chain={chain}
                $gradientBg={chain.gradientBg}
                $shouldLinkToNext={nextIsSupported}
                $isAvailable={chain.isSupported}
              />
            );
          })}
        </SupportedChainResponsiveContainer>
        <ChainDescription>
          <Reg16x24 color={colors.white}>Available</Reg16x24>
          <Reg16x24 color={colors.mediumDarkGray}>/</Reg16x24>
          <Reg16x24 color={colors.mediumDarkGray}>In development</Reg16x24>
        </ChainDescription>
      </Wrap>
    </SupportedChainsContentBlock>
  );
}
