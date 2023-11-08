'use client';

import Image from 'next/image';
import styled from 'styled-components';

import mobileAndDashboardImage from '/public/sections/overview/mobile-and-dashboard-image.svg';
import code from '/public/sections/overview/icons/code.svg';
import googleIcon from '/public/sections/overview/icons/google-icon.svg';
import gasFees from '/public/sections/overview/icons/gas-fees.svg';
import lock from '/public/sections/overview/icons/lock.svg';
import clock from '/public/sections/overview/icons/clock.svg';
import search from '/public/sections/overview/icons/search.svg';
import compass from '/public/sections/overview/icons/compass.svg';
import graph from '/public/sections/overview/graph.svg';
import graph_mobile from '/public/sections/overview/graph_mobile.svg';
import { Button } from '../../button';
import { LandingContentBlock } from '../../landing-content-block/landing-content-block';
import React from 'react';
import useMixpanelContext from '../../../lib/mixpanel/MixpanelContextLanding';
import { Icon } from '../../icon';

type StakingSlider = {
  aprValue?: number;
  cryptoName?: string;
  isPositive?: boolean;
};

const InvestmentsBlock = styled.section`
  width: 100%;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  @media (max-width: 1600px) {
    margin-top: 48px;
  }

  @media (max-width: 768px) {
    padding-bottom: 0;
    margin-top: 32px;
  }

  @media (max-width: 520px) {
    margin-top: 24px;
  }

  section {
    width: 100%;
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #ffffff;
    padding: 0 0 32px 0;
    margin: 0 0 32px 0;
    border-bottom: 1px solid #2C3542;

    @media (max-width: 950px) {
      font-size: 24px;
      line-height: 32px;
      padding-bottom: 16px;
      margin-bottom: 16px;
    }
  }

  h2 {
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 25px;
    }
  }

  p {
    margin: 0;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export const Column = styled.div<{ $gap?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap ?? `24px`};
`;

export const Row = styled.div<{ $gap?: string, $wrap?: string, }>`
  display: flex;
  flex-direction: row;
  flex-wrap: ${(props) => props.$wrap ?? `wrap`};
  gap: ${(props) => props.$gap ?? `24px`};
`;

export const GridComponent = styled.div<{
  $border?: string;
  $padding?: string;
  $gap?: string;
  $justifyContent?: string;
}>`
  width: calc(50% - 62px);
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap ?? `8px`};
  border: ${(props) => props.$border ?? `1px solid #2c3542`};
  padding: ${(props) => props.$padding ?? `48px`};
  border-radius: 16px;
  justify-content: ${(props) => props.$justifyContent ?? `flex-start`};

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: calc(100% - 40px);
    padding: 20px;
  } ;
`;

export const ListComponent = styled.div<{ $padding?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.$padding ?? `24px`};
  border-radius: 12px;
  border: 1px solid #2c3542;
  transition: background 0.1s;
  gap: 24px;
  cursor: pointer;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #7d7d7d;
    transition: color 0.1s;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 150%;
    }
  }

  &:hover {
    background: #2c3542;

    p {
      color: #ffffff;
    }
  }

  > a {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const MobileAndDashboard = styled(Image)`
  width: 371px;
  height: 708px;

  @media (max-width: 1280px) {
    width: 35%;
    height: 100%;
    max-height: 100%;
  }

  @media (max-width: 950px) {
    display: none;
  }
`;

const EasyAccesBlock = styled(Column)`
  padding: 24px;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: #1A222E;
  width: 100%;
  box-sizing: border-box;
  gap: 12px;

  p {
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0px;

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 27px;
    }
  }

  @media (max-width: 650px) {
    padding: 16px;
  }
`;

const AccountAbstraction = styled(Row)`
  padding: 16px 24px;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  justify-content: space-between;
  border-radius: 16px;
  background: linear-gradient(180deg, #8281FF 0%, #605FE5 100%);
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 1280px) {
    flex-wrap: nowrap;
  }

  @media (max-width: 650px) {
    padding: 16px;
  }

  p {
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 27px;
    margin: 0;
    letter-spacing: 0;

    @media (max-width: 1280px) {
      line-height: 23px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 27px;
    }
  }
`;

const AccesAndAbstactionColumn = styled(Column)`
  gap: 16px;
  width: 369px;

  @media (max-width: 1280px) {
    width: 50%;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`;

const SectionsRow = styled(Row)`
  gap: 16px;
  flex-wrap: initial;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const PrivacyBlock = styled(Column)`
  padding: 24px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;

  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: radial-gradient(103.34% 103.35% at 98.38% 97.72%, rgba(174, 68, 215, 0.11) 0%, rgba(47, 39, 69, 0.88) 61.04%, #1A222E 100%);

  @media (max-width: 1280px) {
    width: 50%;
    margin: 0;
  }

  @media (max-width: 650px) {
    padding: 16px;
    width: calc(100% - 32px - 2px);
    gap: 12px;
    flex-direction: row;
  }
`;

const PortfolioGraphBlock = styled(Column)`
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;

  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: #1A222E;

  @media (max-width: 650px) {
    padding: 16px;
  }

  .graph-image {
    @media (max-width: 1280px) {
      width: 100%;
      height: 85%;
    }
  }

  .desctop {
    @media (max-width: 650px) {
      display: none;
    }
  }

  .mobile {
    @media (min-width: 651px) {
      display: none;
    }
  }
`;

const TableBlock = styled(Column)`
  gap: 16px;

  @media (max-width: 1280px) {
    width: calc(100% - 35% - 16px);
  }

  @media (max-width: 950px) {
    width: 100%;
  }
`;

const FeesRow = styled(Row)`
  justify-content: center;
  flex-wrap: initial;
  align-items: center;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);

  @media (max-width: 950px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const GoogleRow = styled(FeesRow)`
  border-bottom: none;
  padding-bottom: 0;

  @media (max-width: 650px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const OverviewSection: React.FC<StakingSlider> = () => {
  return <LandingContentBlock>
    <InvestmentsBlock>
      <section>
        <h1>One Wallet For Everything You Need In DeFi</h1>

        <SectionsRow>
          <MobileAndDashboard src={mobileAndDashboardImage} alt="mobile and dashboard image" />

          <TableBlock>
            <SectionsRow>
              <PrivacyBlock>
                <Image src={lock} alt="lock icon" />
                <Column $gap='12px'>
                  <h2>Privacy First</h2>
                  <p>
                    Your privacy is our priority<br />
                    We neither store nor track any personal data, ensuring your information remains confidential
                  </p>
                </Column>
              </PrivacyBlock>

              <AccesAndAbstactionColumn>
                <EasyAccesBlock>
                  <h2>Hassle-Free</h2>
                  <FeesRow>
                    <Icon
                      src={gasFees.src}
                      $size={'56px'}
                      alt={`gas fees icon`}
                    />
                    <p>Pay transaction fees<br />in any token</p>
                  </FeesRow>
                  <GoogleRow>
                    <Icon
                      src={googleIcon.src}
                      $size={'56px'}
                      alt={`google icon`}
                    />
                    <p>Easy wallet set-up<br />via social login</p>
                  </GoogleRow>
                  <AccountAbstraction>
                    <p>Powered by<br />Account Abstraction</p>
                    <Image src={code} alt="code icon" />
                  </AccountAbstraction>
                </EasyAccesBlock>
              </AccesAndAbstactionColumn>
            </SectionsRow>

            <PortfolioGraphBlock>
              <Image className="graph-image desctop" src={graph} alt="graph image" />
              <Image className="graph-image mobile" src={graph_mobile} alt="graph image mobile" />
              <h2>Portfolio Tracking</h2>
              <Row $gap='12px' $wrap='initial'>
                <Icon
                  src={clock.src}
                  $size={'24px'}
                  alt={`clock icon`}
                />
                <p>Accurate estimates, performance history, and real-time price monitoring</p>
              </Row>
              <Row $gap='12px' $wrap='initial'>
                <Icon
                  src={compass.src}
                  $size={'24px'}
                  alt={`compass icon`}
                />
                <p>Gain a comprehensive view of your portfolio and discover new investment strategies</p>
              </Row>
              <Row $gap='12px' $wrap='initial'>
                <Icon
                  src={search.src}
                  $size={'24px'}
                  alt={`search icon`}
                />
                <p>In-depth, detailed analytics for informed decision-making</p>
              </Row>
            </PortfolioGraphBlock>
          </TableBlock>
        </SectionsRow>
      </section>
    </InvestmentsBlock>
  </LandingContentBlock>
};
