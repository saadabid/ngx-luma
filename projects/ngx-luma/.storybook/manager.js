import { addons } from '@storybook/manager-api';
import lumaTheme from './lumaTheme';

addons.setConfig({
  theme: lumaTheme,
});