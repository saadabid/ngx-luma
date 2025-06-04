import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'ngx-luma - Design system',
  brandUrl: '',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',

  //
  colorPrimary: '#3A10E5',
  colorSecondary: '#585C6D',

  // UI
  appBg: '#160628',
  appContentBg: '#160628',
  appPreviewBg: '#ffffff',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,

  // Text colors
  textColor: '#08fde6',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#08fde6',
  barSelectedColor: '#ffffff',
  barHoverColor: '#ffffff',
  barBg: '#160628',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});