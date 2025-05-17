import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  eslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        project: ['./tsconfig.json'],
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        ngDevMode: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
        Node: 'readonly',
        Element: 'readonly',
        describe: 'readonly',
        beforeEach: 'readonly',
        it: 'readonly',
        expect: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...prettierConfig.rules,
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'prettier/prettier': 'error',
      'no-undef': 'error',
      'no-prototype-builtins': 'off',
      'no-unused-vars': 'off',
      'no-fallthrough': 'off',
      'no-constant-condition': 'off',
      'no-unsafe-finally': 'off',
      'no-case-declarations': 'off',
      'no-empty': 'off',
    },
  },
];
