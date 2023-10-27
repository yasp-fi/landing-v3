import React from 'react';
import { ToastContainer } from 'react-toastify';
import styled, { css } from 'styled-components';

export type NotificationPopUpProps = {
  title: string;
  subtitle?: string;
  content: string;
  highlited?: string;
  additionalContent?: string;
  border: string;
  color: string;
  bg?: string;
  withShadow?: boolean;
};

export const NotificationPopUp: React.FC<NotificationPopUpProps> = ({
  title,
  content,
  subtitle,
  border,
  color,
  highlited,
  additionalContent,
  bg = `#1e242d`,
  withShadow = true,
}) => {
  return (
    <NotificationContainer
      border={border}
      color={color}
      bg={bg}
      withShadow={withShadow}
    >
      <Title>{title}</Title>
      <Content>
        {subtitle}
        {content}
        <Strong color={color}>{highlited}</Strong>
        {additionalContent}
      </Content>
    </NotificationContainer>
  );
};

const NotificationContainer = styled.div<{
  border: string;
  color: string;
  bg: string;
  withShadow: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 23px 24px;
  background-color: ${(props) => props.bg};
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  ${(props) =>
    props.withShadow &&
    css`
      box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 1);
    `}
  border-radius: 12px;
  gap: 10px;
`;
const Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  text-align: center;
`;

const Strong = styled.strong<{
  color: string;
}>`
  color: ${(props) => props.color};
`;

const Content = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
  color: #ffffff;
  margin: 0;
`;

export const StyledToastContainer = styled(ToastContainer).attrs({
  className: `toast-container`,
  toastClassName: `toast`,
  position: 'top-right',
  autoClose: 5000,
})`
  /* .toast-container */
  position: fixed;

  .toast {
    background-color: transparent;
  }

  button[aria-label='close'] {
    display: none;
    position: absolute;
    align-items: center;
    justify-content: center;
    left: 390px;
    top: 15px;
    opacity: 1;
    width: 24px;
    height: 24px;
    padding: 10px;
    border-radius: 12px;
    background: #2c3542;
    border: 1px solid #3c4757;
    color: #ffffff;
    &:hover {
      opacity: 0.5;
    }
    @media(max-width: 480px) {
      left: 260px;
    }
  }
  button[aria-label='close'] svg {
    position: absolute;
    left: 50%;
    transform: translateX(-45%);
    fill: #FFF;
  }
  .progress {
    display: none;
  }
`;
