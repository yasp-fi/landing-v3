'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import subscribeImageTinyPng from '../../public/sections/hero-section/subscribe-image-tinyPng.png';
import closeButton from '../../public/icons/close-button.svg';
import dawIcon from '/public/sections/yield-offers/daw-icon.png';
import useMixpanelContext from '../../lib/mixpanel/MixpanelContextLanding';

const ModalDiv = styled.div`
  width: 568px;
  height: auto;

  @media (max-width: 1280px) {
    width: 552px;
  }

  @media (max-width: 768px) {
    width: 422px;
  }

  @media (max-width: 460px) {
    width: 310px;
  }

  h1 {
    color: #fff;
    margin: 0;
    width: 100%;
    line-height: 42px;

    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 31px;
    }
  }

  .yellow {
    color: #ef9011;
  }

  input {
    width: 315px;
    height: 55px;
    border-radius: 12px;
    border: 2px solid transparent;
    transition: border 1s ease-in-out;
    outline: none;

    padding: 0 12px 0 24px;

    @media (max-width: 768px) {
      width: 219px;
      height: 46px;
      padding-left: 16px;
    }

    @media (max-width: 460px) {
      width: 250px;
    }

    :invalid {
      border: 2px solid #ff5151;
    }
  }

  form {
    display: flex;
    flex-direction: row;

    justify-content: center;

    @media (max-width: 460px) {
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
  }

  form button {
    margin-left: 12px;
    width: 141px;
    height: 59px;

    background: #3772ff;
    border-radius: 12px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;

    border: 0;
    color: #fff;

    cursor: pointer;

    @media (max-width: 768px) {
      width: 131px;
      height: 48px;
    }

    @media (max-width: 460px) {
      width: 278px;
      margin: 0;
    }
  }

  form button:hover {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), #0085FF;
  }
`;

const ModalImage = styled(Image)`
  margin-bottom: 16px;

  @media (max-width: 768px) {
    width: 124px;
    height: 124px;
    margin-bottom: 12px;
  }
`;

const CloseButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  img {
    margin-top: 32px;
    margin-right: 32px;
    margin-bottom: 16px;

    cursor: pointer;

    @media (max-width: 768px) {
      margin-top: 16px;
      margin-right: 16px;
    }

    @media (max-width: 460px) {
      margin-bottom: 12px;
    }
  }
`;

const SubscribeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextModalDiv = styled.div`
  display: flex;
  text-align: center;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 75px;
  padding-bottom: 16px;

  .gray {
    color: #7d7d7d;
    margin: 0;
    line-height: 27px;
    text-align: center;
    padding: 16px;

    @media (max-width: 1280px) {
      padding: 16px 12px;
    }

    @media (max-width: 768px) {
      padding: 12px;
      width: 390px;
      font-size: 14px;
      line-height: 24px;
    }

    @media (max-width: 460px) {
      width: 278px;
    }
  }

  .yellow {
    margin: 0;
    margin-bottom: 32px;

    @media (max-width: 1280px) {
      margin-bottom: 0;
    }

    @media (max-width: 460px) {
      font-size: 14px;
    }
  }
`;

const SuccessDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;

  width: 393px;
  height: 57px;

  border: 1px solid #1dc981;
  border-radius: 16px;
  margin-bottom: 2px;

  p {
    font-size: 16px;
    color: #fff;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 390px;
    height: 46px;
    margin: 0;
  }

  @media (max-width: 460px) {
    padding: 16px;
    width: 220px;
    height: 50px;
    line-height: 28px;
    margin: 12px 0;
  }
`;

interface SubscribeModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({
  modalIsOpen,
  closeModal,
}) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(() => {
    const submitted = localStorage.getItem('isSubmitted');
    return submitted === 'true';
  });

  function saveToLocalStorage() {
    localStorage.setItem('isSubmitted', 'true');
  }

  const mixpanel = useMixpanelContext();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const email = (e.target as any).email.value;
      mixpanel.track(`Landing: Email has been sent (subscription modal)`, {
        email,
      });
      mixpanel.people.set('Email', email); // sets email property to User
      setIsSubmitted(true);
      saveToLocalStorage();
    } catch (e) {
      console.error(e, 'Failed to save email');
    }
  };

  return (
    <ModalDiv>
      <CloseButtonDiv>
        <Image src={closeButton} alt="close icon" onClick={closeModal} />
      </CloseButtonDiv>
      <SubscribeDiv>
        <ModalImage
          src={subscribeImageTinyPng}
          width={198}
          alt="Subscribe image"
        />
      </SubscribeDiv>
      <TextModalDiv>
        <h1>
          Keep up to date with
          <br />
          <span className={`yellow`}> our newsletter</span>
        </h1>
      </TextModalDiv>
      <form onSubmit={handleSubmit}>
        {isSubmitted ? (
          <SuccessDiv>
            <Image src={dawIcon} alt="daw icon" />
            <p>Success! You&apos;re now on our mailing list.</p>
          </SuccessDiv>
        ) : (
          <>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
            <button type="submit">Subscribe</button>
          </>
        )}
      </form>
      <FooterDiv>
        <p className={`gray`}>
          YaspFi news, version updates, event invitations and more from our team
        </p>
      </FooterDiv>
    </ModalDiv>
  );
};
