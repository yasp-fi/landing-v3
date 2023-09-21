'use client';

import React from 'react';
import styled from 'styled-components';

import newLogo from '/public/newLogo.svg';
import {
  CAREERS_LINK,
  DISCORD,
  GITHUB,
  TWITTER,
  WIKI_LINK,
} from '../../lib/constants';
import { LandingContentBlock } from '../landing-content-block/landing-content-block';
import LayoutWithFill from '../layout-with-fill';
import { Row } from '../kit/layout';
import { Button } from '../button';

import { Icon } from '../icon';
import alchemy from '/public/alchemy-icon.png';
import Image from 'next/image';
import Link from 'next/link';
import useMixpanelContext from '../../lib/mixpanel/MixpanelContextLanding';

const Logo = styled.div`
  width: 36px;
  height: 36px;
  background: #ffffff;
  mask-image: url('${newLogo.src}');
  mask-repeat: no-repeat;
  mask-size: contain;

  -webkit-mask-image: url('${newLogo.src}');
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;

  @media (max-width: 768px) {
    width: 33px;
    height: 33px;
    margin-right: auto;
  }

  @media (max-width: 465px) {
    margin-top: 10px;
  }
`;

const LogoBlock = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
  grid-area: 1 / span 2;

  @media (max-width: 900px) {
    grid-area: auto;
    grid-column: span 4;
    flex-direction: column;
    order: 1;
    align-items: center;
    margin-top: 32px;
  }

  @media (max-width: 465px) {
    grid-area: auto;
    grid-column: 1/3;
  }

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 170%;
    color: #7d7d7d;
  }

  b {
    color: #ffffff;
  }
`;

const FooterBlock = styled.footer`
  display: flex;
  flex-direction: column;
  background: #171d25;
  padding: 96px 0;

  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: 1600px) {
    padding-top: 80px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 64px 0 32px 0;
    margin-bottom: 80px;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;

    color: #ffffff;
  }

  & section {
    display: grid;
    padding-top: 0;
    padding-bottom: 48px;
    grid-template-columns: repeat(6, 1fr);
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 900px) {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
      width: 100%;
    }

    @media (max-width: 465px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 32px;
    }
  }

  ${Button} {
    display: flex;
    justify-content: center;
    padding: 16px 24px;
    gap: 8px;
    width: 150px;
    height: 68px;
    border-radius: 12px;
    color: #ffffff;
    @media (max-width: 768px) {
      width: 90%;
    }
  }
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const FooterLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: -1px;
    width: 100%;
    height: 2px;
    background-color: #ffffff;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 540px) {
    text-align: start;
    max-width: 100px;
  }

  @media (max-width: 465px) {
    max-width: max-content;
  }
`;

const FooterLinkWIP = styled(FooterLink)`
  pointer-events: none;
  cursor: not-allowed;
  color: #515151;
`;

const FooterItemtitle = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #7d7d7d;
`;

const Name = styled.p`
  font-style: normal;
  font-weight: 700 !important;
  font-size: 18px !important;
  line-height: 27px !important;

  color: #ffffff;
  margin: 0;
  padding-top: 6px;

  @media (max-width: 768px) {
    padding-top: 4px;
  }

  @media (max-width: 465px) {
    padding-top: 14px;
  }
`;

const AlchemyIcon = styled(Image)`
  width: 200px;
  height: 44px;

  @media (max-width: 900px) {
    width: 160px;
    height: 35px;
  }
`;

export const Footer = () => {
  const mixpanel = useMixpanelContext();
  return (
    <LayoutWithFill color={'#171d25'}>
      <LandingContentBlock>
        <FooterBlock>
          <section>
            <LogoBlock>
              <Row $gap="8px">
                <Logo />
                <Name>{`YaspFi`}</Name>
              </Row>
              <span>{`© 2023 YaspFi`}</span>
              <Link
                href={`https://alchemy.com/?r=e218a7f47ebbb59f`}
                target="_blank"
              >
                <AlchemyIcon src={alchemy} alt={'Powered by Alchemy'} />
              </Link>
            </LogoBlock>
            <FooterItem>
              <FooterItemtitle>{`About`}</FooterItemtitle>
              <FooterLink
                target={'_blank'}
                href={'privacy_policy.pdf'}
                onClick={() => {
                  mixpanel.track(`Landing: Privacy Policy button click (Footer)`);
                }}
              >{`Privacy Policy`}</FooterLink>
              <FooterLink
                target={'_blank'}
                href={CAREERS_LINK}
                onClick={() => {
                  mixpanel.track(`Landing: Careers button click (Footer)`);
                }}
              >{`Careers`}</FooterLink>
              <FooterLink
                target={'_blank'}
                href={WIKI_LINK}
                onClick={() => {
                  mixpanel.track(`Landing: Docs button click (Footer)`);
                }}
              >{`Docs`}</FooterLink>
            </FooterItem>

            <FooterItem>
              <FooterItemtitle>{`Products`}</FooterItemtitle>
              <FooterLink
                href={`https://chrome.google.com/webstore/detail/yaspfi/djedhmiipclhalmoahhaphocdcdppjcc`}
                onClick={() => {
                  mixpanel.track(`Landing: Wallet button click (Footer)`);
                }}
              >{`Wallet`}</FooterLink>
              <FooterLink
                href={`https://yasp.fi/app/yield-offers`}
                onClick={() => {
                  mixpanel.track(
                    `Landing: DeFi Dashboard button click (Footer)`
                  );
                }}
              >{`Yield Offers`}</FooterLink>
              <FooterLink
                href={`/app/exchange`}
                onClick={() => {
                  mixpanel.track(`Landing: Exchange button click (Footer)`);
                }}
              >{`Exchange`}</FooterLink>
              <FooterLinkWIP>{`Buy Crypto`}</FooterLinkWIP>
            </FooterItem>

            <FooterItem>
              <FooterItemtitle>{`Platform`}</FooterItemtitle>
              <FooterLink
                href={'https://yasp.fi/app/yield-offers'}
                target={'_blank'}
                onClick={() => {
                  mixpanel.track(`Landing: Web button click (Footer)`);
                }}
              >{`Web App`}</FooterLink>
              <FooterLink
                href={'https://chrome.google.com/webstore/detail/yaspfi/djedhmiipclhalmoahhaphocdcdppjcc'}
                target={'_blank'}
                onClick={() => {
                  mixpanel.track(`Landing: Extension button click (Footer)`);
                }}
              >{`Extension`}</FooterLink>
              <FooterLinkWIP>{`IOS`}</FooterLinkWIP>
              <FooterLinkWIP>{`Google Play`}</FooterLinkWIP>
            </FooterItem>

            <FooterItem>
              <FooterItemtitle>{`Channels`}</FooterItemtitle>
              <Row $alignItems={'center'} $gap={'10px'}>
                <Icon
                  width={26}
                  height={21}
                  src={'/icons/discord-white.svg'}
                  alt={'discord logo in black & white'}
                />
                <FooterLink
                  target={'_blank'}
                  href={DISCORD}
                  onClick={() => {
                    mixpanel.track(`Landing: Discord button click (Footer)`);
                  }}
                >{`Discord`}</FooterLink>
              </Row>
              <Row $alignItems={'center'} $gap={'10px'}>
                <Icon
                  width={26}
                  height={21}
                  src={'/icons/twitter-X.svg'}
                  alt={'twitter logo in black & white'}
                />
                <FooterLink
                  target={'_blank'}
                  href={TWITTER}
                  onClick={() => {
                    mixpanel.track(`Landing: Twitter button click (Footer)`);
                  }}
                >{`Twitter`}</FooterLink>
              </Row>
              <Row $alignItems={'center'} $gap={'10px'}>
                <Icon
                  width={26}
                  height={21}
                  src={'/icons/github-white.svg'}
                  alt={'github logo in black & white'}
                />
                <FooterLink
                  target={'_blank'}
                  href={GITHUB}
                  onClick={() => {
                    mixpanel.track(`Landing: Github button click (Footer)`);
                  }}
                >{`GitHub`}</FooterLink>
              </Row>
              <Row $alignItems={'center'} $gap={'10px'}>
                <Icon
                  width={26}
                  height={21}
                  src={'/icons/mail-white.svg'}
                  alt={'mail sign in black & white'}
                />
                <FooterLink
                  target={'_blank'}
                  href={'mailto:hello@yasp.fi'}
                  onClick={() => {
                    mixpanel.track(`Landing: Mail Us button click (Footer)`);
                  }}
                >{`Mail Us`}</FooterLink>
              </Row>
            </FooterItem>
          </section>
        </FooterBlock>
      </LandingContentBlock>
    </LayoutWithFill>
  );
};
