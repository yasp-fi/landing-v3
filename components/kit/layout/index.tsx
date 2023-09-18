import styled from 'styled-components';

type FlexProps = {
  $gap?: string;
  $alignItems?: string;
  $justifyContent?: string;
  $padding?: string;

  $marginTop?: string;
  $height?: string;
};

const Row = styled.div<FlexProps>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.$gap};
  align-items: ${(props) => props.$alignItems};
  justify-content: ${(props) => props.$justifyContent};
  padding: ${(props) => props.$padding};
  height: ${(props) => props.$height};
  margin-top: ${(props) => props.$marginTop};
`;

const Column = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap};
  align-items: ${(props) => props.$alignItems};
  justify-content: ${(props) => props.$justifyContent};
  padding: ${(props) => props.$padding};
  height: ${(props) => props.$height};

  margin-top: ${(props) => props.$marginTop};
`;

export { Column, Row };
