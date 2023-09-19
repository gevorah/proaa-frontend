import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tsEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import jest from 'eslint-plugin-jest'
import vitest from 'eslint-plugin-vitest'
import globals from 'globals'

export default [
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tsEslint,
      prettier,
      vitest,
      jest
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: './'
      }
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      ...tsEslint.configs['recommended-type-checked'].rules,
      ...tsEslint.configs['stylistic-type-checked'].rules,
      ...prettier.configs.recommended.rules,
      ...vitest.configs.recommended.rules,
      ...jest.configs.recommended.rules,
      '@typescript-eslint/consistent-type-definitions': ['error', 'type']
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]
