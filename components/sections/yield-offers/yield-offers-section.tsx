'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import assetsImage from '/public/sections/yield-offers/assets-image.svg';
import trustScore from '/public/sections/yield-offers/trust-score.svg';
import trustScore_mobile from '/public/sections/yield-offers/trust-score-mobile.svg';
import { LandingContentBlock } from '../../landing-content-block/landing-content-block';
import { Column, Row } from '../../kit/layout';
import { Button } from '../../button';
import useMixpanelContext from '../../../lib/mixpanel/MixpanelContextLanding';
import { Icon } from '../../icon';
import arrow from '/public/sections/yield-offers/arrow-white.svg';

const PortfolioContentBlock = styled.div`
  margin-top: 64px;
  display: flex;
  flex-flow: row nowrap;
  gap: 58px;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 1600px) {
    margin-top: 48px;
    gap: 58px;
  }

  @media (max-width: 1280px) {
    gap: 32px;
  }

  @media (max-width: 768px)  {
    gap: 24px;
    margin-top: 32px;
  }

  @media (max-width: 550px)  {
    flex-direction: column;
    gap: 12px;
  }

  @media (max-width: 520px)  {
    margin-top: 24px;
  }

  h1 {
    color: #ffffff;

    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 45px;

    max-width: 500px;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 32px;
    }
  }

  p {
    color: #ffffff;

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 150%;
    }
  }

  ${Button} {
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;

    h3 {
      margin: 0;
      color: #FFF;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: -0.2px;
    }

    img {
      fill: white;
    }
  }

  #for-mobile {
    order: 2;
    text-align: center;
    height: 52px;

    @media (min-width: 551px) {
      display: none;
    }
  }

  #for-desctop {
    @media (max-width: 550px) {
      display: none;
    }
  }
`;

const PortfolioImageDiv = styled(Column)`
  flex: 1;
  flex-basis: 50%;
  align-items: center;

  gap: 24px;
  max-width: 458px;

  @media (max-width: 768px) {
    max-width: calc(50% - 8px);
  }

  @media (max-width: 700px)  {
    justify-content: center;
  }

  @media (max-width: 550px) {
    max-width: 100%;
  }
`;

const ImageFullWidth = styled(Image)`
  width: 100%;
  height: 100%;
`;

const PortfolioTextDiv = styled(Column)`
  justify-content: center;

  @media (max-width: 1280px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: calc(50% - 8px);
  }

  @media (max-width: 550px)  {
    width: 100%;
    order: 1;
  }

  .main_p {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: -0.4px;

    max-width: 628px;
    margin: 12px 0 0 0;

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 28px;
    }
  }
`;

const AssetItem = styled(Column)`
  width: 122px;
  padding: 8px 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  @media (max-width: 768px) {
    width: fit-content;
  }

  h2 {
    margin: 0;
    color: #FFD15C;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
  }

  p {
    margin: 0;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
  }
`;

const VerticalLine = styled(Column)`
  width: 32px;
  margin: 10px 0;
  border-left: 1px solid rgba(255, 255, 255, 0.12);

  @media (max-width: 768px) {
    display: none;
  }
`;

const AssetsBlock = styled(Row)`
  gap: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    justify-content: space-between;
    margin-top: 12px;
  }

  @media (max-width: 550px) {
    justify-content: flex-start;
    gap: 75px;
  }

  @media (max-width: 500px) {
    justify-content: space-between;
    gap: 0;
  }
`;

const TrustScore = styled(Column)`
  padding: 24px;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  margin-top: 32px;

  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.12);

  @media (max-width: 768px)  {
    margin-top: 16px;
  }

  @media (max-width: 650px) {
    padding: 16px;
    gap: 12px;
  }

  h1 {
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 36px;
    }

    @media (max-width: 550px) {
      font-size: 18px;
      line-height: 25px;
    }
  }

  p {
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 21px;
    }
  }

  #trust-score-desctop {
    @media (max-width: 650px) {
      display: none;
    }
  }

  #trust-score-mobile {
    @media (min-width: 651px) {
      display: none;
    }
  }
`;

export const YieldOffersSection: React.FC = () => {
  const mixpanel = useMixpanelContext();
  const clientOnly = typeof window !== 'undefined';
  const isBigScreen = clientOnly && window.innerWidth > 900;

  return (
    <LandingContentBlock>
      <PortfolioContentBlock>
        <PortfolioTextDiv>
          {isBigScreen ? (
            <h1>
              We Aggregate Valuable DeFi Opportunities For Your Sustainable Yield
            </h1>
          ) : (
            <h1>
              We aggregate all DeFi opportunities for your sustainable yield
            </h1>
          )}
          <p className={'main_p'}>
            Access a range of yield offers designed to seek the most efficient path to maximise your returns
            <br />
            <br />
            Park your coins into DeFi offers, YaspFi will do the rest
          </p>

          <AssetsBlock>
            <AssetItem>
              <h2>250+</h2>
              <p>Yield offers</p>
            </AssetItem>
            <VerticalLine></VerticalLine>
            <AssetItem>
              <h2>100+</h2>
              <p>Assets</p>
            </AssetItem>
            <VerticalLine></VerticalLine>
            <AssetItem>
              <h2>10+</h2>
              <p>Providers</p>
            </AssetItem>
          </AssetsBlock>
        </PortfolioTextDiv>

        <PortfolioImageDiv>
          <ImageFullWidth src={assetsImage} alt="assets image" />
          <Button
            id="for-desctop"
            as={'a'}
            href={'https://yasp.fi/app/yield-offers'}
            $color={'#0085FF'}
            $onHoverColor={
              'linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), #0085FF'
            }
            target={'_blank'}
            $padding={'12px 16px'}
            $radius={'12px'}
            onClick={() => {
              mixpanel.track(`Landing: Open App "explore" button`);
            }}
          >
            <h3>Explore</h3>
            <Icon
              src={arrow.src}
              $size={'24px'}
              alt={`arrow icon`}
            />
          </Button>
        </PortfolioImageDiv>

        <Button
          id="for-mobile"
          as={'a'}
          href={'https://yasp.fi/app/yield-offers'}
          $color={'#0085FF'}
          $onHoverColor={
            'linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), #0085FF'
          }
          target={'_blank'}
          $padding={'12px 16px'}
          $radius={'12px'}
          onClick={() => {
            mixpanel.track(`Landing: Open App "explore" button`);
          }}
        >
          <h3>Explore</h3>
          <Icon
            src={arrow.src}
            $size={'24px'}
            alt={`arrow icon`}
          />
        </Button>
      </PortfolioContentBlock>

      <TrustScore>
        <h1>Open Trust Score Model</h1>
        <p>A simple tool for your data-driven decisions with more than 15 trust parameters weighed into a single comprehensible score</p>
        <ImageFullWidth src={trustScore} alt="trust score image" id='trust-score-desctop' />
        <ImageFullWidth src={trustScore_mobile} alt="trust score image" id='trust-score-mobile' />
      </TrustScore>
    </LandingContentBlock>
  );
};
