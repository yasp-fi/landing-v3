'use client';

import Image from 'next/image';
import styled from 'styled-components';
import circle from '/public/sections/fiat-engine/circle.svg';
import moonPay from '/public/sections/fiat-engine/moon-pay.svg';
import onramp from '/public/sections/fiat-engine/onramp.svg';
import stripe from '/public/sections/fiat-engine/stripe.svg';

import { Column } from './overview/overview-section';
import { LandingContentBlock } from '../landing-content-block/landing-content-block';
import { Row } from '../kit/layout';
import { SoonIcon } from './hero-section';

const FiatBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }

  h1 {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    color: #ffffff;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 25px;
    }
  }

  .main-p {
    margin: 0;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #ffffff;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    align-self: stretch;

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 21px;
    }

    @media (max-width: 550px) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  section {
    display: flex;
    padding: 24px;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    align-self: stretch;
    width: 100%;
    align-items: flex-start;

    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.12);

    @media (max-width: 550px) {
      padding: 16px;
      width: calc(100% - 32px - 2px);
    }

    .not-first {
      padding-left: 38px;

      @media (max-width: 550px) {
        padding-left: 16px;
        padding-right: 0;
      }

      @media (max-width: 420px) {
        padding-left: 0;
      }
    }

    .last {
      border: none;
    }
  }
`;

const FiatRow = styled(Column)`
  justify-content: center;
  gap: 12px;
  align-self: stretch;
`;

const AssetsItem = styled(Column)`
  margin: 8px 0px;
  align-items: flex-start;
  align-self: stretch;
  gap: 0;
  width: max-content;

  border-right: 1px solid rgba(255, 255, 255, 0.12);
  padding-right: 40px;

  @media (max-width: 1280px) {
    max-width: 88px;
  }

  @media (max-width: 840px) {
    max-width: fit-content;
    padding-right: 30px;
  }

  @media (max-width: 550px) {
    padding-right: 20px;
    border: none;
  }

  @media (max-width: 330px) {
    padding-right: 0;
  }

  h2 {
    color: #FFD15C;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    margin: 0;
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
`;

const CompaniesRow = styled(Row)`
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 550px) {
    justify-content: center;
  }
`;

const CompanyBlock = styled(Row)`
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #232D3D;
  height: fit-content;

  @media (max-width: 375px) {
    flex-direction: column;
    gap: 16px;
  }

  @media (max-width: 350px) {
    padding: 12px 8px;
  }
`;

const AssetsAndIcons = styled(Row)`
  gap: 0;

  @media (max-width: 840px) {
    flex-direction: column;
    gap: 16px;
  }

  .assets-row {
    @media (max-width: 420px) {
      gap: 16px;
      flex-wrap: wrap;
    }
  }
`;

export const FiatEngineSection = () => {
  return (
    <LandingContentBlock>
      <FiatBlock>
        <section>
          <FiatRow>
            <Row $alignItems={`center`} $gap={`8px`}>
              <h1>Buy Crypto</h1>
              <SoonIcon>Soon</SoonIcon>
            </Row>
            <p className="main-p">
              {`We aggregate a bunch of fiat gateways to provide you with the best rates in the space, from fiat to crypto and back`}
              <br></br>
            </p>
          </FiatRow>
          <AssetsAndIcons>
            <Row className='assets-row'>
              <AssetsItem>
                <h2>80+</h2>
                <p>Assets supported</p>
              </AssetsItem>
              <AssetsItem className='not-first'>
                <h2>40+</h2>
                <p>Fiat currencies</p>
              </AssetsItem>
              <AssetsItem className='not-first last'>
                <h2>100+</h2>
                <p>Countries</p>
              </AssetsItem>
            </Row>
            <CompaniesRow>
              <CompanyBlock>
                <Image src={moonPay} alt="MoonPay icon" />
              </CompanyBlock>
              <CompanyBlock>
                <Image src={stripe} alt="stripe icon" />
              </CompanyBlock>
              <CompanyBlock>
                <Image src={onramp} alt="onramp icon" />
              </CompanyBlock>
              <CompanyBlock>
                <Image src={circle} alt="circle icon" />
              </CompanyBlock>
            </CompaniesRow>
          </AssetsAndIcons>
        </section>
      </FiatBlock>
    </LandingContentBlock>
  );
};
