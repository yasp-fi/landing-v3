'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { Icon } from '../icon';
import Link from 'next/link';

import exploreBlurBg from '/public/sections/join-us/explore-blur.svg';
import bgCircles from '/public/sections/join-us/bg-circles.svg';
import bgGradientBlue from '/public/sections/join-us/bg-gradient-blue.svg';
import { ListComponent } from '../sections/overview/overview-section';
import LayoutWithFill from '../layout-with-fill';
import { LandingContentBlock } from '../landing-content-block/landing-content-block';
import { Button } from '../button';
import { breakPointsConf, colors, DISCORD, TWITTER } from '../../lib/constants';
import { StyledToastContainer } from '../notification';
import { Column, Row } from '../kit/layout';
import useMixpanelContext from '../../lib/mixpanel/MixpanelContextLanding';
import google from '/public/sections/overview/icons/google.svg';
import twitter from '/public/sections/overview/icons/twitter.svg';
import facebook from '/public/sections/overview/icons/facebook.svg';
import discord from '/public/sections/overview/icons/discord.svg';

const JoinUsBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  @media ${breakPointsConf.isMobile} {
    width: 100%;
  }

  section {
    display: flex;
    padding: 0;
    flex-direction: column;
    justify-content: center;
    gap: 0;
    align-self: stretch;
    width: 100%;
    align-items: center;
  }
`;

const ExploreBlock = styled(Column)`
  padding: 64px 24px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  align-self: stretch;

  border-radius: 24px 24px 0px 0px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background-color: #232C39;
  background-image: url('${bgCircles.src}');
  background-repeat: no-repeat;

  @media (max-width: 1280px) {
    background-position: center;
  }

  @media (max-width: 900px) {
    padding: 32px 24px;
    gap: 16px;
  }

  @media (max-width: 500px) {
    padding: 16px;
  }

  h1 {
    color: #F4F0FE;
    text-align: center;
    font-size: 52px;
    font-style: normal;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: -1.3px;
    margin: 0;

    .orange {
      color: #EF9011;
    }

    @media (max-width: 900px) {
      font-size: 32px;
      line-height: 38px;
    }

    @media (max-width: 450px) {
      max-width: 300px;
    }
  }
`;

const CommunityBlock = styled(Row)`
  padding: 16px 24px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-radius: 0px 0px 24px 24px;
  background-color: #194E8B;
  background-image: url('${bgGradientBlue.src}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: -100px;

  @media (max-width: 600px) {
    background-position-x: -260px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 12px;
    background-position-x: 0px;
  }

  p {
    color: #FFF;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: -0.4px;

    @media (max-width: 900px) {
      font-size: 16px;
      line-height: 27px;
      margin: 0;
    }
  }
`;

const CompanyIcon = styled(Link)`
  padding: 8px;
  display: flex;
  align-items: flex-start;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.16);
  transition: background-color 0.4s;

  &:hover {
    background-color: #6DB3F8;
  }

  img {
    @media (max-width: 900px) {
      width: 32px;
      height: 32px;
    }
  }
`;

const ButtonRow = styled(Row)`
  position: relative;
  z-index: 2;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.02);
    z-index: -10;
  }

  ${Button} {
    padding: 16px 48px;

    p {
      color: #0F0F0F;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.2px;
      margin: 0;
    }
  }
`;

const CompanyIcons = styled(Row)`
  gap: 16px;

  @media (max-width: 900px) {
    gap: 8px;
  }
`;

export const JoinUsCallout = () => {
  const mixpanel = useMixpanelContext();

  const scrollTo = () => {
    const ref = document.getElementById('scroll-here');
    if (ref) {
      const scrollMarginTop = 45;
      const elementPosition = ref.getBoundingClientRect().top + window.scrollY - scrollMarginTop;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  }

  return (
    <LandingContentBlock>
      <JoinUsBlock>
        <section>
          <ExploreBlock>
            <h1>
              Looking For The <span className='orange'>Only Key</span>
              <br />
              To Access DeFi?
            </h1>
            <ButtonRow>
              <Button
                $color={'#FFFFFF'}
                onClick={() => scrollTo()}
                $onHoverColor={
                  'linear-gradient(to right, #FFFFFF, #6DB3F8)'
                }
                $padding={'12px 16px'}
                $radius={'12px'}
              >
                <p>Explore YaspFi</p>
              </Button>
              <Image src={exploreBlurBg} alt="Gradient background" />
            </ButtonRow>
          </ExploreBlock>
          <CommunityBlock>
            <p>Join the YaspFi community</p>
            <CompanyIcons>
              <CompanyIcon
                href={DISCORD}
                target="_blank"
                onClick={() => {
                  mixpanel.track(`Landing: Discord button click (Explore-section)`);
                }}
              >
                <Icon
                  src={discord.src}
                  $size={'48px'}
                  alt={`discord icon`}
                />
              </CompanyIcon>
              <CompanyIcon
                href={TWITTER}
                target="_blank"
                onClick={() => {
                  mixpanel.track(`Landing: Twitter button click (Explore-section)`);
                }}
              >
                <Icon
                  src={twitter.src}
                  $size={'48px'}
                  alt={`twitter icon`}
                />
              </CompanyIcon>
            </CompanyIcons>
          </CommunityBlock>
        </section>
      </JoinUsBlock>
    </LandingContentBlock>
  );
};

