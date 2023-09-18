'use client';
import { breakPointsConf } from '../../lib/constants';
import styled from 'styled-components';


export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;

  background-color: #171D25;

  @media ${breakPointsConf.isMobile} {
    background-size: auto;
    background-position: left -460px;
    overflow-x: hidden;
  }
`;
