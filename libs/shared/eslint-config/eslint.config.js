// @ts-check

import eslint from '@eslint/js'
import nxPlugin from '@nx/eslint-plugin'
import tseslint from 'typescript-eslint'

export default tseslint.config({
  files: ['src/**/*.ts'],
  extends: [
    eslint.configs.recommended,
    tseslint.configs.recommended,
    tseslint.configs.stylistic,
  ],
  plugins: { '@nx': nxPlugin },
  rules: {
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@nx/enforce-module-boundaries': [
      'error',
      {
        enforceBuildableLibDependency: true,
        allow: [],
        depConstraints: [
          {
            sourceTag: '*',
            onlyDependOnLibsWithTags: ['*'],
          },
          {
            sourceTag: 'type:impl',
            onlyDependOnLibsWithTags: ['type:api'],
          },
          {
            sourceTag: 'type:api',
            onlyDependOnLibsWithTags: ['type:api'],
          },
          {
            sourceTag: 'type:shared',
            onlyDependOnLibsWithTags: ['type:shared'],
          },
          {
            sourceTag: 'type:application',
            onlyDependOnLibsWithTags: ['type:shared', 'type:api', 'type:impl'],
          },
        ],
      },
    ],
  },
})
