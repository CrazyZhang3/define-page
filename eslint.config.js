import antfu from '@antfu/eslint-config';

export default antfu(
  {
    ignores: [
      '**/shims-uni-app.d.ts',
    ],
  },
  {
    // style
    rules: {
      'style/quote-props': ['error', 'as-needed'],
      'style/semi': ['error', 'always'],
      'style/max-statements-per-line': ['error', { max: 1 }],
      curly: ['warn', 'all'],
      'style/member-delimiter-style': ['warn', {
        multiline: { delimiter: 'semi', requireLast: true },
        singleline: { delimiter: 'semi', requireLast: false },
        multilineDetection: 'brackets',
      }],
      'style/brace-style': ['warn', '1tbs'],
      'style/padded-blocks': 'off',
      'no-console': 'off',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'none',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    files: [
      'packages/playground/**/*.vue',
      'packages/playground/**/*.ts',
    ],
    rules: {
      'no-console': 'off',
    },
  },
  {
    files: ['**/manifest.json', '**/pages.json'],
    rules: {
      indent: ['error', 4],
      'jsonc/indent': ['error', 4],
    },
  },
);
