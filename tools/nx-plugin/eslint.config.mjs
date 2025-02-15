import baseConfig from '@modular-monolith/shared-eslint-config'
import nxPlugin from '@nx/eslint-plugin'

export default [
  ...baseConfig,
  {
    files: ['**/*.json'],
    plugins: { '@nx': nxPlugin },
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs}'],
        },
      ],
    },
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
  {
    files: ['**/package.json', '**/package.json', '**/generators.json'],
    plugins: { '@nx': nxPlugin },
    rules: {
      '@nx/nx-plugin-checks': 'error',
    },
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
]
