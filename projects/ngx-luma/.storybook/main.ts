import type { StorybookConfig } from '@storybook/angular';
import path from 'path';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  },
  webpackFinal: async (config) => {
    // Add Sass loader rule
    if (config.module) {
      config.module.rules = config.module.rules || []; // Ensure rules array exists
      config.module.rules.push({
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: [path.resolve(__dirname, '../src')],
      });
    }

    return config;
  },
};
export default config;