'use client';

import styled from 'styled-components';

type Props = {
  color?: '#1e242d' | '#2c3542' | '#171d25' | string;
};

const LayoutWithFill = styled.div<Props>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color || `#1e242d`};
`;
export default LayoutWithFill;


export const LandingLayout = styled.div`
  width: 100%;
`;