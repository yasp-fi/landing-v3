'use client';

import { breakPointsConf } from '../../../lib/constants';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { LandingContentBlock } from '../../landing-content-block/landing-content-block';
import { Button } from '../../button';
import { Column, Row } from '../../kit/layout';
import { Icon } from '../../icon';

import exchangePreview from '/public/sections/exchange/exchange-image.svg';
import arrow from '/public/sections/exchange/arrow-right.svg';
import Ox_org from '/public/sections/exchange/partners/0x.svg';
import cyber_swap from '/public/sections/exchange/partners/kyber-swap.svg';
import linch from '/public/sections/exchange/partners/linch.svg';
import paraswap from '/public/sections/exchange/partners/paraswap.svg';
import openOcean from '/public/sections/exchange/partners/open-ocean.svg';
import useMixpanelContext from '../../../lib/mixpanel/MixpanelContextLanding';

const ExchangeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: visible;
  padding-top: 64px;
  padding-bottom: 32px;

  @media (max-width: 1600px) {
    padding-top: 48px;
  }

  @media (max-width: 768px) {
    padding-top: 32px;
    padding-bottom: 16px;
  }

  @media (max-width: 520px) {
    padding-top: 24px;
  }

  .exchange-content {
    width: 550px;
    height: 100%;
    margin: auto;

    @media (max-width: 900px) {
      width: 50%;
      margin: 0;
    }

    @media (max-width: 650px) {
      width: 100%;
      order: 2;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 120px;
    width: 100%;
  }

  p {
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: -0.4px;
    margin: 16px 0 0 0;

    @media (max-width: 900px) {
      font-size: 16px;
      line-height: 27px;
    }
  }

  h1 {
    color: #FFF;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 38px;
    margin: 0;

    @media (max-width: 900px) {
      font-size: 24px;
      line-height: 31px;
    }

    @media ${breakPointsConf.isMobile} {
      font-size: 24px;
      line-height: 36px;
    }
  }
`;

const ExchangeMain = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 132px;


  @media (max-width: 1280px) {
    gap: 72px;
  }

  @media (max-width: 900px) {
    gap: 24px;
  }

  @media (max-width: 750px) {
    align-items: flex-start;
  }

  @media (max-width: 650px) {
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

const ExchnagePartnersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: start;
  justify-content: center;
  gap: 16px;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

const ExchnagePartners = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 24px 0;
  gap: 24px;
  justify-content: flex-start;

  @media (max-width: 900px) {
    padding: 48px 0 0 0;
    column-gap: 16px;
    row-gap: 24px;
  }

  @media (max-width: 650px) {
    padding-top: 16px;
    align-items: center;
    justify-content: center;
  }

  img {
    height: auto;

    @media (max-width: 900px) {
      scale: 0.88;
    }
  }
`;

const ExchangeBgLayout = styled(Column)`
  align-items: center;
  gap: 24px;

  @media (max-width: 900px) {
    width: 50%;
  }

  @media (max-width: 650px) {
    width: 100%;
  }

  a {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    /* @media (max-width: 650px) {
      display: none;
    } */

    h3 {
      margin: 0;
      color: #171717;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.2px;
    }
  }
`;

const ExchangeImage = styled(Image)`
  width: 455px;
  height: 455px;

  @media (max-width: 1000px) {
    width: 400px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const ExchangeComponent = () => {
  const mixpanel = useMixpanelContext();

  return (
    <ExchangeBgLayout>
      <ExchangeImage
        style={{ margin: `auto` }}
        alt={`exchange-preview`}
        src={exchangePreview}
      />
      <Button
        as={'a'}
        href={'https://yasp.fi/app/exchange'}
        $color={'#FFFFFF'}
        $onHoverColor={
          'linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), #0085FF'
        }
        target={'_blank'}
        $padding={'12px 16px'}
        $radius={'12px'}
        onClick={() => {
          mixpanel.track(`Landing: Open Exchange "Swap" button`);
        }}
      >
        <h3>Swap</h3>
        <Icon
          src={arrow.src}
          $size={'24px'}
          alt={`info icon`}
        />
      </Button>
    </ExchangeBgLayout>
  );
};

export const ExchangeSection = () => {
  return (
    <LandingContentBlock>
      <ExchangeBlock id={`exchange`}>
        <section>
          <ExchangeMain>
            <div className="exchange-content">
              <div>
                <h1>
                  Exchange With <br />Our Aggregator <br />Of DEX Aggregators
                </h1>
                <p>
                  {`Our engine aggregates DEX aggregators and cross-blockchain exchange protocols, enables the best execution rate and the most gas-efficient price in DeFi`}
                  <br />
                </p>
              </div>

              <ExchnagePartnersWrapper>
                <ExchnagePartners>
                  <Image src={cyber_swap} alt="Kyber Swap" />
                  <Image src={linch} alt="Linch" />
                  <Image src={paraswap} alt="Paraswap" />
                  <Image src={Ox_org} alt="Ox" />
                  <Image src={openOcean} alt="Open Ocean" />
                </ExchnagePartners>
              </ExchnagePartnersWrapper>
            </div>
            <ExchangeComponent />
          </ExchangeMain>
        </section>
      </ExchangeBlock>
    </LandingContentBlock>
  );
};
