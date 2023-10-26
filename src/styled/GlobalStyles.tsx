import { css, Global, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';
import {
  $darkColor,
  $desktopWidth,
  $mainFont,
  $mainFontSize,
  $phoneWidth,
  $tableWidth,
  calcFluidFontSize,
  rem,
} from './helpers';
import { QuinqueFiveTtf, QuinqueFiveWoff, QuinqueFiveWoff2 } from '../assets/fonts/QuinqueFive';

export const GlobalStyles: FC = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        font-style: normal;
      }

      @font-face {
        font-family: 'QuinqueFive';
        src: url(${QuinqueFiveWoff2}) format('woff2'), url(${QuinqueFiveWoff}) format('woff'),
          url(${QuinqueFiveTtf}) format('truetype');
      }

      ul,
      ol,
      li {
        list-style: none;
      }

      button {
        font-family: inherit;
      }

      html {
        font-family: ${$mainFont};
        font-size: ${$mainFontSize};
        scroll-behavior: smooth;
        @media screen and (max-width: ${$desktopWidth}) {
          font-size: ${calcFluidFontSize(11.0223, 21.3333, 992, 1920)};
        }
        @media screen and (max-width: ${$tableWidth}) {
          font-size: ${calcFluidFontSize(9.9999, 20.6666, 480, 992)};
        }
        @media screen and (max-width: ${$phoneWidth}) {
          font-size: ${calcFluidFontSize(11.9465, 20.48, 280, 480)};
        }
      }

      body {
        position: relative;
        /* background: ${$darkColor}; */
        background: #fff;
        color: ${$darkColor};
        &::-webkit-scrollbar {
          width: 0;
          display: none;
        }
      }

      #root {
        display: grid;
        grid-template-rows: auto 1fr auto;
        min-height: 100vh;
      }

      section {
        margin-bottom: ${rem(160)};
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    `}
  />
);

//global animation

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

//global styled

export const Container = styled.div`
  width: 100%;
  max-width: ${rem(1320)};
  margin: 0 auto;
  padding: 0 ${rem(20)};
`;
