'use client';

import React from 'react';
import styled from 'styled-components';

import newLogo from '/public/newLogo.svg';

import github from '/public/header/github-2.svg';
import twitter from '/public/header/twitter-X.svg';
import chrome from '/public/icons/chrome-white-icon.svg';

import { LandingContentBlock } from '../landing-content-block/landing-content-block';
import { Button } from '../button';
import { GITHUB, TWITTER } from '../../lib/constants';
import { colors } from '../../lib/constants';
import NProgress from 'nprogress';
import Link from 'next/link';
import { Icon } from '../icon';
import useMixpanelContext from '../../lib/mixpanel/MixpanelContextLanding';

const HeaderBlock = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;

  gap: 20px;
  padding-top: 16px;

  span {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
  }

  b {
    color: #ffffff;
  }
`;

const HeaderRightButtons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 16px;

  .round-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;

    .icon {
      filter: brightness(0) invert(1);
    }
  }

  .create-wallet-button {
    @media (max-width: 575px) {
      display: none;
    }
  }

  .open-app-desktop {
    @media (max-width: 340px) {
      display: none;
    }
  }

  .open-app-mobile {
    @media (min-width: 341px) {
      display: none;
    }
  }
`;

const CompanyName = styled.div`
  margin-left: 12px;
  font-weight: 700;
  color: ${colors.white};
  font-size: 18px;
  line-height: 34px;
`;

const IconLink = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: ${colors.white};
`;

const HugeButtons = styled(Button)`
  display: flex;
  gap: 8px;

  @media (max-width: 1600px) {
    padding: 12px 16px;
  }

  @media (max-width: 575px) {
    padding: 8px 12px;
  }

  p {
    line-height: 28px;
    margin: 0;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -0.2px;

    &:active {
      background: none;
    }
  }
`;

export const Header = () => {
  const mixpanel = useMixpanelContext();
  return (
    <LandingContentBlock>
      <HeaderBlock>
        <IconLink
          prefetch={false}
          href={'#'}
          onClick={() => {
            NProgress.start();
            setTimeout(() => NProgress.done(), 500);
          }}
        >
          <Icon
            src={newLogo.src}
            $size={'32px'}
            alt={`YaspFi Logo`}
            color={`#fff`}
            className={`icon`}
          />
          <CompanyName>YaspFi</CompanyName>
        </IconLink>
        <HeaderRightButtons>
          {/* <Button
            className={'round-button'}
            $round
            as={`a`}
            href={TWITTER}
            target={`_blank`}
            onClick={() => {
              mixpanel.track(`Landing: Twitter button click (Header)`);
            }}
          >
            <Icon
              src={twitter.src}
              alt={`twitter`}
              $size={'24px'}
              className={`icon`}
            />
          </Button>
          <Button
            className={'round-button'}
            $round
            as={`a`}
            href={GITHUB}
            target={`_blank`}
            onClick={() => {
              mixpanel.track(`Landing: Github button click (Header)`);
            }}
          >
            <Icon
              src={github.src}
              $size={'24px'}
              alt={`github`}
              color={`#fff`}
              className={`icon`}
            />
          </Button> */}

          <HugeButtons
            className='create-wallet-button'
            as={'a'}
            $color={'#EF9011'}
            target={'_blank'}
            href={'https://chrome.google.com/webstore/detail/yaspfi/djedhmiipclhalmoahhaphocdcdppjcc'}
            $padding={'12px 24px'}
            $radius={'12px'}
            $onHoverColor={'linear-gradient(0deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%), rgb(239, 144, 17)'}
            onClick={() => {
              mixpanel.track(`Landing: Create Wallet button (Header)`);
            }}
          >
            <Icon
              src={chrome.src}
              $size={'24px'}
              alt={`chrome`}
            />
            <p color='#fff'>Create Wallet</p>
          </HugeButtons>

          <>
            <HugeButtons
            className='open-app-desktop'
            as={'a'}
            href={'https://yasp.fi/app/yield-offers'}
            $color={'#0085FF'}
            target={'_blank'}
            $padding={'12px 24px'}
            $radius={'12px'}
            $onHoverColor={
              'linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), #0085FF'
            }
            onClick={() => {
              mixpanel.track(`Landing: Open App button (Header)`);
            }}
            >
              <p color='#fff'>Open Web App</p>
            </HugeButtons>

            <HugeButtons
              className='open-app-mobile'
              as={'a'}
              href={'https://yasp.fi/app/yield-offers'}
              $color={'#0085FF'}
              target={'_blank'}
              $padding={'12px 24px'}
              $radius={'12px'}
              $onHoverColor={
                'linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), #0085FF'
              }
              onClick={() => {
                mixpanel.track(`Landing: Open App button (Header)`);
              }}
            >
              <p color='#fff'>Web App</p>
            </HugeButtons>
          </>
        </HeaderRightButtons>
      </HeaderBlock>
    </LandingContentBlock>
  );
};
