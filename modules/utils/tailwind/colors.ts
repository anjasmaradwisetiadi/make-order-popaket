import { scale } from 'chroma-js';
import { range } from '../range';
import { transform } from '../transform';

const palettes: any = {
  teal: ['#dcf6f7', '#0bacb3'],
  purple: ['#ececfc', '#5a5ae5'],
  gray: ['#f2f2f2', '#383838'],
  blue: ['#e0eaf6', '#2262ab'],
  pink: ['#feeaef', '#f74a73'],
  green: ['#e8f8e8', '#31be31'],
  orange: ['#fff5db', '#edad00'],
  black: '#000000',
  white: '#ffffff',
  softGray: '#f8f8f8',
  mainBg: '#f7fbfb',
};

export function palette(colors: string[], step: number = 100) {
  const domain = range(100, 900, step);
  const scales = scale(colors)
    .mode('hsl')
    .correctLightness(true)
    .domain(domain);

  return {
    ...domain.reduce(
      (acc, n) => ({
        ...acc,
        [n]: scales(n).hex(),
      }),
      {}
    ),
  };
}

export const colors = transform(palettes, (result: any, color: any) => ({
  ...result,
  [color]: Array.isArray(palettes[color])
    ? palette(palettes[color])
    : palettes[color],
}));
