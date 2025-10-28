import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: [
      '.next/**/*',
      'node_modules/**/*',
      'out/**/*',
      'build/**/*',
      'dist/**/*',
    ],
  },
  {
    rules: {
      // Disable Next.js Image component rule since we prefer regular img tags
      '@next/next/no-img-element': 'off',
      // Remove unused imports and variables
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'no-unused-vars': 'off', // Turn off base rule as it can report incorrect errors
    },
  },
];

export default eslintConfig;
