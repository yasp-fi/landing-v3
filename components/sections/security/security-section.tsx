'use client';

import React from 'react';
import styled from 'styled-components';
import { Column, Row } from '../../kit/layout';
import Image from 'next/image';
import openSource from '/public/sections/security/trust-score-code.svg';
import openSourceMobile from '/public/sections/security/trust-score-code-mobile.svg';
import backgroundDots from '/public/sections/security/background-dots.svg';
import trustScoreKeys from '/public/sections/security/trust-score-keys.svg';
import trustScoreKeysMobile from '/public/sections/security/trust-score-keys-mobile.svg';
import { LandingContentBlock } from '../../landing-content-block/landing-content-block';

const SecurityLayout = styled.section`
  margin-top: 64px;

  @media (max-width: 1600px) {
    margin-top: 48px;
  }

  @media (max-width: 768px) {
    margin-top: 32px;
  }

  @media (max-width: 520px) {
    margin-top: 24px;
  }
`;

const ElementsRow = styled(Row)`
  align-items: center;
  align-self: stretch;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.12);

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const SecurityBlock = styled(Column)`
  width: 560px;
  padding: 24px 32px;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 24px 0 0 24px;
  position: relative;
  background: 
    url('${backgroundDots.src}') 8px 0/cover,
    linear-gradient(124deg, #8A50CF 0%, #4A22D2 100%);

  @media (max-width: 900px) {
    width: auto;
    border-radius: 24px 24px 0 0;
    background: 
      url(/_next/static/media/background-dots.f7bfed26.svg) 8px -10px/cover,
      linear-gradient(124deg, #8A50CF 0%, #4A22D2 100%);
  }

  @media (max-width: 500px) {
    background: linear-gradient(124deg, #8A50CF 0%, #4A22D2 100%);
  }

  h1 {
    color: #F4F0FE;
    font-size: 52px;
    font-style: normal;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: -1.3px;
    margin: 0;
    max-width: 430px;

    .yellow {
      color: #FFD84F;
    }

    @media (max-width: 1000px) {
      font-size: 36px;
      line-height: 42px;
    }

    @media (max-width: 900px) {
      max-width: 100%;
    }

    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 31px;
    }
  }
`;

const GridElements = styled(Column)`
  width: 584px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
  }

  .keys {
    @media (max-width: 900px) {
      display: none;
    }
  }

  .last {
    border-radius: 0 0 24px 0;

    @media (max-width: 500px) {
      border-radius: initial;
    }
  }

  .open-source-item {
    @media (max-width: 500px) {
      order: 2;
    }
  }
`;

const GridItem = styled(Column)`
  padding: 24px;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  box-sizing: border-box;

  @media (max-width: 500px) {
    padding: 16px;
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
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 24px;
    }

    @media (max-width: 500px) {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

const OpenSourceImage = styled.div`
  background-image: url('${openSource.src}');
  border-radius: 0 0 24px 0;
  background-size: 100%;
  width: 292px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const MobileImage = styled(Row)`
  align-items: center;
  justify-content: center;
  background: #2C3E65;

  @media (min-width: 901px) {
    display: none;
  }
`;

export const SecuritySection: React.FC = () => {
  return (
    <LandingContentBlock>
      <SecurityLayout>
        <ElementsRow>
          <SecurityBlock>
            {/* {isBigScreen ? (
              <h1>
                Security Is Not <br />A Feature,
                <br />
                <span className={`yellow`}>It's A Foundation </span>
                <br />
                One That YaspFi Is Built On
              </h1>
            ) : ( */}
              <h1>
                Security is not a feature,
                <br />
                <span className={`yellow`}>it's a foundation </span>
                <br />
                one that YaspFi is built on
              </h1>
            {/* )} */}
          </SecurityBlock>

          <GridElements>
            <Image className="keys" src={trustScoreKeys} alt="trust score image" />
            <MobileImage>
              <Image src={trustScoreKeysMobile} alt="trust score image" />
            </MobileImage>
            <GridItem>
              <Row $gap='8px' $alignItems='center' $justifyContent='center'>
                <h2>Non-Custodial</h2>
              </Row>
              <p>
                Not your keys, not your crypto. We empower you with complete control over your funds through our non-custodial wallet
              </p>
            </GridItem>
            <GridItem className='open-source-item'>
              <Row $gap='8px' $alignItems='center' $justifyContent='center'>
                <h2>Open Source</h2>
              </Row>
              <p>
                YaspFi is following the standard for transparency in the DeFi space by building an open-source technology
              </p>
            </GridItem>
            <OpenSourceImage></OpenSourceImage>
            <MobileImage className='last'>
              <Image src={openSourceMobile} alt="open source image" />
            </MobileImage>
          </GridElements>
        </ElementsRow>
      </SecurityLayout>
    </LandingContentBlock>
  );
};
