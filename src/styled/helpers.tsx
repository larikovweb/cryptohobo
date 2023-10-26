/* eslint-disable max-len */

import { SCREEN_LG, SCREEN_MD, SCREEN_SM } from '../utils/consts';

//variables
export const $desktopWidth = `${SCREEN_LG}px`;
export const $tableWidth = `${SCREEN_MD}px`;
export const $phoneWidth = `${SCREEN_SM}px`;
export const $mainFont = 'QuinqueFive, sans-serif';
export const $mainFontSize = '21.3333px';
export const $primaryColor = '#E3F37E';
export const $darkColor = '#05141A';
export const $radialGradient =
  'radial-gradient( 50% 50% at 50% 50%,rgba(58, 153, 240, 0.6) 0%, rgba(9, 9, 9, 0) 100%)';

// mixins
export const rem = (pixels: number, context = 16): string => {
  if (pixels) {
    pixels * 1;
  }
  if (context) {
    context * 1;
  }

  return `${(pixels / context) * 1}rem`;
};

export const calcFluidFontSize = (
  f_min: number,
  f_max: number,
  v_min: number,
  v_max: number,
): string => {
  const k = (f_max - f_min) / (v_max - v_min);
  let b = f_min - k * v_min;

  b = b * 1;

  return `calc(${`${k * 100}vw + ${b}px`})`;
};
