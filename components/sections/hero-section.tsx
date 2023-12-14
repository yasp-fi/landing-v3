'use client';

import Image from 'next/image';
import { breakPointsConf, colors } from '../../lib/constants';
import React, {useRef, useState, useCallback, useEffect} from 'react';
import { useSearchParams } from "next/navigation";
import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';

import desktop_img from '../../public/sections/hero-section/web-app-image.png';
import extensions_img from '../../public/sections/hero-section/browser-extension-image.png';
import mobile_img from '../../public/sections/hero-section/mobile-app-image.png';
import newMainPageImage from '../../public/new-background-image-big.png';
import chooseDeviseIcon from '../../public/sections/hero-section/choose-devise-icon.svg';
import newMainPageImageMobile from '../../public/new-background-image-mobile.png';
import {
  Row,
  Column,
} from './overview/overview-section';
import animatedArrows from '../../public/animated_arrows.json';

import { Button } from '../button';
import { Header } from '../layout/header';

import Modal from 'react-modal';
import { SubscribeModal } from './subscribe-modal';
import useMixpanelContext from '../../lib/mixpanel/MixpanelContextLanding';
import chrome from '/public/icons/chrome-white-icon.svg';
import { Icon } from '../icon';

const BlockSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #151A21;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  background-color: #171D25;
  background-image: url('${newMainPageImage.src}');
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 2200px) {
    background-size: 2100px;
    background-position-x: center;
  }

  @media (max-width: 1750px) {
    background-position-x: 70px;
  }

  @media (max-width: 1600px) {
    background-position-x: 110px;
  }

  @media (max-width: 1440px) {
    background-position-x: 140px;
  }

  @media (max-width: 1300px) {
    background-position-x: 100px;
  }

  @media (max-width: 1200px) {
    background-position-x: -10px;
  }

  @media (max-width: 1100px) {
    background-size: 120%;
  }

  @media (max-width: 900px) {
    background-size: 130%;
    background-position-x: -110px;
  }

  @media (max-width: 768px) {
    background-size: 135%;
    background-position-y: 50px;
    background-position-x: -140px;
  }

  @media (max-width: 650px) {
    background-size: 150%;
    background-position-x: -160px;
  }

  @media (max-width: 575px) {
    background-image: url('${newMainPageImageMobile.src}');
    background-position: 0 0;
    background-size: 100vw;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 575px) {
      align-items: center;
    }
  }

  h3 {
    margin: 0;
    text-align: center;
    text-transform: capitalize;
    font-weight: 700;
    font-size: 20px;
    line-height: 34px;
    color: #ffffff;
    font-style: normal;
  }
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 280px;
  margin-bottom: 168px;

  @media (max-width: 1600px) {
    margin-top: 150px;
    margin-bottom: 70px;
  }

  @media (max-width: 1280px) {
    margin-top: 110px;
    margin-bottom: 36px;
  }

  @media (max-width: 768px) {
    margin-top: 150px;
    margin-bottom: 50px;
  }

  @media (max-width: 575px) {
    margin-top: 520px;
    margin-bottom: 64px;
  }

  @media (max-width: 525px) {
    margin-top: 475px;
  }

  @media (max-width: 475px) {
    margin-top: 425px;
  }

  @media (max-width: 425px) {
    margin-top: 375px;
  }

  @media (max-width: 375px) {
    margin-top: 325px;
  }

  @media (max-width: 325px) {
    margin-top: 260px;
  }

  h1 {
    margin: 0;
    white-space: break-spaces;
    max-width: 600px;
    text-align: start;

    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: -1.3px;
    color: #ffffff;

    @media (max-width: 1000px) {
      font-size: 48px;
      line-height: 56px;
    }

    @media (max-width: 768px) {
      font-size: 32px;
      line-height: 38px;
    }

    @media (max-width: 575px) {
      text-align: center;
      white-space: normal;
    }

    @media (max-width: 375px) {
      white-space: break-spaces;
    }

    .yellow {
      color: #ef9011;
    }

    .blue {
      color: #0085ff;
    }

    .pink {
      color: #ff8bb3;
    }
  }
`;

const ProductsSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 620px) {
    display: flex;
    flex-direction: column;
  }

  /* @media (max-width: 520px) {
    flex-direction: column;
  } */

  .choose-devise {
    align-items: flex-start;
    background: linear-gradient(124deg, #8A50CF 0%, #4A22D2 100%), linear-gradient(212deg, #4E5968 1.37%, #313F54 100%);
    box-shadow: -11px 35px 40px 0px rgba(0, 0, 0, 0.30);

    @media (max-width: 1050px) {
      display: none;
    }

    @media (max-width: 800px) {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
    }

    @media (max-width: 620px) {
      display: none;
    }

    h2 {
      color: #FFF;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 38px;
      margin: 0;

      @media (max-width: 800px) {
        font-size: 24px;
        line-height: 31px;
        width: 150px;
      }
    }
  }
`;

const ProductCard = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  gap: 12px;

  border-radius: 24px;
  background: #1A222E;

  @media (max-width: 1280px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    width: auto;
  }

  @media (max-width: 520px) {
    justify-content: flex-start;
    padding: 16px;
    width: calc(100% - 32px - 2px);
    height: auto;
    gap: 12px;
  }

  .card-button {
    width: 100%;
    text-align: center;
    border-radius: 12px;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.2px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    p {
      line-height: 24px;
      margin: 0;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      letter-spacing: -0.2px;
      white-space: nowrap;

      &:active {
        background: none;
      }
    }
  }

  .has-border {
    border: 1px solid #EF9011;
    padding: 11px 16px;
  }
`;

const AppImage = styled(Image)`
  margin: 0;

  @media (max-width: 800px) {
    display: none;
  }
`;

const SoonBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const SoonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #EF9011;
  border-radius: 20px;
  padding: 4px 12px;

  color: #EF9011;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-transform: uppercase;
`;

interface ImageBlockProps {
  $color?: string;
}

const ImageBlock = styled(Column)<ImageBlockProps>`
  align-items: center;
  justify-content: center;
  width: 225px;
  height: 176px;
  border-radius: 16px;
  background: ${(props) => props.$color || 'transparent'};

  @media (max-width: 1280px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 100,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    borderRadius: '16px',
    background: '#1E242D',
    border: '0',
    overflow: 'hidden',
  },
};

export const HeroSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const params = useSearchParams();

  useEffect(() => {
    if (params && !!params.get('waitlist')) {
      setModalIsOpen(true);
    }
  }, [params]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const mixpanel = useMixpanelContext();

  const scrollTo = useCallback(() => {
    const ref = document.getElementById('scroll-here');
    if (ref) {
      const scrollMarginTop = 45;
      const elementPosition = ref.getBoundingClientRect().top + window.scrollY - scrollMarginTop;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Get on the list Modal"
        style={customStyles}
      >
        <SubscribeModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      </Modal>

      <BlockSection>
        <Header />
        <HeroSectionWrapper>
          <TitleBlock>
            <h1>
              YaspFi is a
              {`\n`}
              <span className={`blue`}>one-stop</span>
              <span className={`pink`}> shop </span>
              {`\n`}
              for<span className={'yellow'}> everything</span>
              {`\n`}
              <span className={`yellow`}>DeFi</span>
            </h1>
          </TitleBlock>

          <ArrowsDiv onClick={() => scrollTo()}>
            <Player
              src={animatedArrows}
              style={{ cursor: 'pointer', width: '100px', height: '104px' }}
              autoplay
              loop
            />
          </ArrowsDiv>
        </HeroSectionWrapper>


        <HeroSectionWrapper>
          <TextDiv>
            <p>Choose your device</p>
          </TextDiv>

          <ProductsSection id='scroll-here'>
            <ProductCard className='choose-devise'>
              <Icon
                src={chooseDeviseIcon.src}
                $size={'64px'}
                alt={`choose devise icon`}
              />
              <h2>Choose Your Device</h2>
            </ProductCard>

            <ProductCard>
              <h3>Web App</h3>
              <ImageBlock $color='#2C3157'>
                <AppImage
                  src={desktop_img}
                  width={152}
                  alt="Desktop app preview"
                />
              </ImageBlock>
              <Button
                as={'a'}
                href={'/app/yield-offers'}
                className='card-button'
                $color={'#0085FF'}
                $onHoverColor={
                  'linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), #0085FF'
                }
                target={'_blank'}
                $padding={'12px 16px'}
              >
                Open Web App
              </Button>
            </ProductCard>

            <ProductCard>
              <SoonBlock>
                <h3>Mobile App</h3>
                <SoonIcon>Soon</SoonIcon>
              </SoonBlock>
              <ImageBlock $color='#223C4F'>
                <AppImage
                  src={mobile_img}
                  width={152}
                  alt="Mobile App preview"
                />
              </ImageBlock>
              <Button
                className='has-border card-button'
                onClick={() => {
                  openModal();
                  mixpanel.track(`Landing: Open get on the list modal`);
                }}
                $padding={'12px 16px'}
                $color={'#1A222E'}
                $onHoverColor={'#151A21'}
              >
                Join Waitlist
              </Button>
            </ProductCard>
          </ProductsSection>
        </HeroSectionWrapper>
      </BlockSection>
    </>
  );
};

export const HeroSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1140px;

  @media ${breakPointsConf.isTablet} {
    margin-top: 0;
    max-width: calc(100% - 200px);
    overflow: hidden;
    box-sizing: border-box;
  }

  @media (max-width: 1100px) {
    max-width: calc(100% - 48px);
    overflow: hidden;
  }

  @media (max-width: 768px) {
    max-width: calc(100% - 40px);
  }
`;

export const ArrowsDiv = styled(Row)`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  z-index: 5;

  @media (max-width: 1600px) {
    margin-bottom: 46px;
  }

  @media (max-width: 768px) {
    margin-bottom: 28px;
  }

  @media (max-width: 575px) {
    display: none;
    margin-bottom: 0;
  }
`;

const TextDiv = styled(Column)`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  gap: 0;

  @media (min-width: 1051px) {
    display: none;
  }

  @media (max-width: 800px) {
    display: none;
  }

  @media (max-width: 620px) {
    display: flex;
  }

  p {
    margin: 0;
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: -0.4px;

    @media (max-width: 950px) {
      font-size: 16px;
      line-height: 27px;
    }

    @media (max-width: 620px) {
      font-size: 24px;
      line-height: 31px;
      font-weight: 700;
    }
  }
`;
