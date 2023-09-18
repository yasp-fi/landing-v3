import styled from 'styled-components';
import { colors } from '../../lib/constants';

type TypographyProps = {
  color?: keyof typeof colors | string;
};

export const Bold32x48 = styled.span<TypographyProps>`
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0;

  color: ${(props) => (props.color ? props.color : colors.white)};
`;

export const Reg16x24 = styled.span<TypographyProps>`
  /* font-family: 'Poppins'; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;

  color: ${(props) => (props.color ? props.color : colors.white)};
`;

export const Bold24x36 = styled.span<TypographyProps>`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0;
  color: ${(props) => (props.color ? props.color : colors.white)};
`;

export const Bold20x30 = styled.span<TypographyProps>`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0;
  color: ${(props) => (props.color ? props.color : colors.white)};
`;

export const Bold18x36 = styled.span<TypographyProps>`
  font-size: 18px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0;
  color: ${(props) => (props.color ? props.color : colors.white)};
`;

export const Bold6x24 = styled.span<TypographyProps>`
  font-size: 6px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0;
  color: ${(props) => (props.color ? props.color : colors.white)};
`;

export const Bold15x21 = styled.span<TypographyProps>`
  font-size: 15px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0;
  color: ${(props) => (props.color ? props.color : colors.white)};
`;

export const PageHeading2 = styled.h2<TypographyProps>`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: ${(props) => props.color ?? colors.white};
  margin: 0;
`;

export const PageParagraph = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;
