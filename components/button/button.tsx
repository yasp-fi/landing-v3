import { colors, whiteLoaderColorsSet } from '../../lib/constants';
import React from 'react';
import styled from 'styled-components';
import { RingLoader } from '../loader';

export type ButtonProps = {
  type?: 'submit';
  variant: 'outlined' | 'filled' | 'transparent';
  buttonText: string;
  onClick?: VoidFunction;

  marginTop?: string;
  startIcon?: React.FC<any>;
  endIcon?: React.FC<any>;
  as?: string;
  target?: string;
  href?: string;
  onHoverColor?: string;
  buttonTextColor?: string;
  outlineColor?: string;
  backgroundColor?: string;
  borderRadius?: string;
  border?: string;
  loading?: boolean;
  disabled?: boolean;

  width?: string;
  height?: string;
};

type ContainerProps = Omit<
  ButtonProps,
  'buttonText' | 'onClick' | 'endIcon' | 'startIcon' | 'loading'
>;

export const ButtonContainer = styled.button<ContainerProps>`
  border-radius: 12px;
  color: ${(props) =>
    props.buttonTextColor ?? props.disabled
      ? colors.mediumDarkGray
      : colors.white};
  background: ${(props) => {
    if (props.disabled) {
      if (props.variant === 'outlined') return props.backgroundColor;
      return colors.disabledBlue;
    }

    return props.backgroundColor ?? colors.lightBlue;
  }};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width ?? `188px`};
  margin-top: ${(props) => props.marginTop};
  height: ${(props) => props.height ?? `51px`};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  border: ${(props) => props.border ?? `none`};

  outline: none;
`;

export const UiButton: React.FC<ButtonProps> = ({
  type,
  buttonText,
  onClick,
  endIcon,
  startIcon,
  loading,
  as,
  target,
  href,
  ...containerProps
}) => {
  return (
    <ButtonContainer
      // as={as}
      target={target}
      href={href}
      type={type}
      onClick={containerProps.disabled ? () => null : onClick}
      {...containerProps}
    >
      {loading ? (
        <RingLoader
          // @ts-ignore
          colors={whiteLoaderColorsSet}
          width={32}
          height={32}
        />
      ) : (
        buttonText
      )}
    </ButtonContainer>
  );
};
