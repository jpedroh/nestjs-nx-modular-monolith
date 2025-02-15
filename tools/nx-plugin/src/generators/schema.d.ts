type ModuleType = 'api' | 'impl' | 'shared'

export interface ModuleGeneratorSchema {
  name: string
  type: ModuleType
}
