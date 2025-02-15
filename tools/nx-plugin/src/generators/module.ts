import { join } from 'path'
import { type Tree, generateFiles } from '@nx/devkit'
import type { ModuleGeneratorSchema } from './schema'

// eslint-disable-next-line @typescript-eslint/no-require-imports
import workspaceRoot = require('@nx/devkit')

export default async function moduleGenerator(
  tree: Tree,
  options: ModuleGeneratorSchema
) {
  const moduleName =
    options.type === 'shared'
      ? ['shared', options.name]
      : ['modules', `${options.name}-${options.type}`]

  const projectRoot = ['libs', ...moduleName].join('/')

  generateFiles(tree, join(__dirname, 'files'), projectRoot, {
    ...options,
    offsetFromRoot: workspaceRoot.offsetFromRoot(projectRoot),
    formattedName: moduleName.join('-'),
  })
}
