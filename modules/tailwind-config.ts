import { Module } from '@nuxt/types';
import { colors } from './utils/tailwind/colors';
import { plugins } from './utils/tailwind/plugins';

export const hookTailwindConfig: Module = function () {
  this.nuxt.hook('tailwindcss:config', (tailwindConfig: any) => {
    tailwindConfig.theme.extend = {
      ...tailwindConfig.theme.extend,
      colors,
    };

    tailwindConfig.plugins = [...tailwindConfig.plugins, ...plugins];
  });
};
export default hookTailwindConfig;
