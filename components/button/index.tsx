import React from 'react';
export * from './button';

import styled, { css } from 'styled-components';
import { colors } from '../../lib/constants';

interface ButtonProps {
  $color?: string;
  $glow?: string;
  $onHoverColor?: string | keyof typeof colors;
  $onActiveColor?: string | keyof typeof colors;
  $blocked?: boolean;
  $round?: boolean;
  $radius?: string;
  $padding?: string;
  $fontSize?: string;
}

export const Button = styled.button<ButtonProps>`
  color: ${(props) => (!props.$blocked ? `#FFFFFF` : `#787F92`)};
  background-color: ${(props) =>
    !props.$blocked ? props.$color || `#2C3542` : `#1E242D`};
  border: none;

  border-radius: ${(props) => props.$radius || '90px'};
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  padding: ${(props) => props.$padding || '16px'};
  box-sizing: border-box;

  display: block;
  font-family: inherit;
  align-items: center;
  gap: 12px;

  ${(props) =>
    props.$glow
      ? css`
          box-shadow: none, 0 20px 40px ${props.$glow || `#2C3542`}4D;

          &:hover {
            box-shadow: none;
          }
        `
      : css``}
  &:hover {
    cursor: ${(props) => (!props.$blocked ? `pointer` : `not-allowed`)};
    background: ${(props) =>
    !props.$blocked
      ? props.$onHoverColor || props.$color || `#0085FF`
      : `#1E242D`};
    transition: box-shadow 0.2s, background-color 0.2s;
  }

  :active {
    background: ${(props) => props.$onActiveColor || props.$color || `#0078E6`};
  }
`;
