import { Config } from 'stylelint';

const config: Config = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-tailwindcss/scss',
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'no-empty-source': null,
    'color-no-invalid-hex': true,
    'selector-class-pattern': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'responsive',
          'screen',
          'variants',
        ],
      },
    ],
  },
};

export default config;
